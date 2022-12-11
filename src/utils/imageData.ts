import Papa from 'papaparse';

import keywordsByCategory from '../data/category_words.json';
import {
  BubbleCategory,
  Category,
  CategoryData,
  CategoryNames,
  ImageKeyword,
} from '../types';

export const getImagePath = (imageId: string): string => `/data/${imageId}.jpg`;
export const getImageDataPath = (imageId: string): string =>
  `/data/${imageId}.csv`;

export const fetchImageData = (
  imageId: string,
  callback: (data: ImageKeyword[]) => void,
): void => {
  Papa.parse(getImageDataPath(imageId), {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: (res) => {
      callback(res.data as ImageKeyword[]);
    },
  });
};

export const splitKeywordsInCategories = (
  imageData: ImageKeyword[],
): CategoryData => {
  let categoryData: CategoryData = {};
  imageData.forEach((entry) => {
    const category = Object.entries(keywordsByCategory).find((keywords) =>
      keywords[1].includes(entry.keyword),
    )?.[0];
    if (category) {
      const previousCatData = categoryData[category];
      categoryData = {
        ...categoryData,
        [category]: previousCatData ? [...previousCatData, entry] : [entry],
      };
    }
  });
  return categoryData;
};

export const transformDataToBubbles = (
  imageCategories: CategoryData,
): BubbleCategory => {
  const bubbles: Category[] = Object.entries(imageCategories)
    .filter(([cat]) => cat !== CategoryNames.NotApplicable)
    .map(([cat, keywords]) => ({
      // todo: add nice categories
      name: cat,
      children: keywords.map((k) => ({ name: k.keyword, value: k.confidence })),
    }));

  return {
    name: 'image',
    children: bubbles,
  };
};
