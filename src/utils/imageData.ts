import Papa from 'papaparse';

import { KEYWORDS_BY_CATEGORY } from '../config/constants';
import {
  BubbleCategory,
  Category,
  CategoryData,
  ImageKeywords,
} from '../types';

export const getImagePath = (imageId: string): string => `/data/${imageId}.jpg`;
export const getImageDataPath = (imageId: string): string =>
  `/data/${imageId}.csv`;

export const fetchImageData = (
  imageId: string,
  callback: (data: ImageKeywords[]) => void,
): void => {
  Papa.parse(getImageDataPath(imageId), {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: (res) => {
      callback(res.data as ImageKeywords[]);
    },
  });
};

export const splitKeywordsInCategories = (
  imageData: ImageKeywords[],
): CategoryData => {
  let categoryData: CategoryData = {};
  imageData.forEach((entry) => {
    const category = Object.entries(KEYWORDS_BY_CATEGORY).find((keywords) =>
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
  const bubbles = Object.entries(imageCategories).map(([cat, keywords]) => ({
    name: cat,
    children: keywords.map((k) => ({ name: k.keyword, value: k.coef })),
  })) as Category[];

  return {
    name: 'image',
    children: bubbles,
  };
};