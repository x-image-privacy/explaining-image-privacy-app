import { t } from 'i18next';
import Papa from 'papaparse';
import randomColor from 'randomcolor';

import { IMAGE_ID, MAX_NUMBER_OF_WORDS_BUBBLE } from '../config/constants';
import keywordsByCategory from '../data/category_words.json';
import {
  BubbleCategory,
  Category,
  CategoryData,
  CategoryNames,
  ImageKeyword,
  WordCloudKeyword,
} from '../types';

export const getImagePath = (imageId: string): string => `/data/${imageId}.jpg`;
export const getImageDataPath = (imageId: string): string =>
  `/data/${imageId}.csv`;

export const getCategoryColor = (cat: string): string =>
  randomColor({ seed: cat, luminosity: 'dark' });

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
    if (category && category !== CategoryNames.NotApplicable) {
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
  const bubbles: Category[] = Object.entries(imageCategories).map(
    ([cat, keywords]) => ({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      name: t(`${cat.toUpperCase()}_CATEGORY`),
      children: keywords
        .map((k) => ({ name: k.keyword, value: k.confidence }))
        .sort((a, b) => (a.value > b.value ? -1 : 1))
        .slice(0, MAX_NUMBER_OF_WORDS_BUBBLE),
    }),
  );

  return {
    name: IMAGE_ID,
    children: bubbles,
  };
};

export const transformDataToWordCloud = (
  imageCategories: CategoryData,
): WordCloudKeyword[] => {
  const wordcloud: WordCloudKeyword[] = Object.entries(imageCategories).reduce(
    (acc: WordCloudKeyword[], [cat, keywords]) => [
      ...acc,
      ...keywords.map((k) => ({
        value: k.keyword,
        count: k.confidence * 100,
        color: getCategoryColor(cat),
      })),
    ],
    [],
  );
  return wordcloud;
};
