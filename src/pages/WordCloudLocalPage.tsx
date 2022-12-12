import { FC, useEffect, useState } from 'react';

import { Container, Divider } from '@chakra-ui/react';

import DisplayImage from '../components/DisplayImage';
import WordCloudLocal from '../components/WordCloudLocal';
import imageLabels from '../data/image_label.json';
import { CategoryData } from '../types';
import {
  fetchImageData,
  splitKeywordsInCategories,
  transformDataToWordCloud,
} from '../utils/imageData';

const WordCloudLocalPage: FC = () => {
  const Image1 = Object.keys(imageLabels)[1];
  const Image2 = Object.keys(imageLabels)[3];

  const [imageId1] = useState<string>(Object.keys(imageLabels)[1]);
  const [imageId2] = useState<string>(Object.keys(imageLabels)[3]);

  const [imageCategories1, setImageCategories1] = useState<CategoryData>({});
  const [imageCategories2, setImageCategories2] = useState<CategoryData>({});

  useEffect(
    () => {
      fetchImageData(Image1, (imageData) =>
        setImageCategories1(splitKeywordsInCategories(imageData)),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(
    () => {
      fetchImageData(Image2, (imageData) =>
        setImageCategories2(splitKeywordsInCategories(imageData)),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Container maxW="100vw" p={3} centerContent>
      <DisplayImage imageId={imageId1} mt={2} />
      <WordCloudLocal
        data={transformDataToWordCloud(imageCategories1)}
        categories={Object.keys(imageCategories1)}
      />
      <Divider marginY={6} />
      <DisplayImage imageId={imageId2} mt={2} />
      <WordCloudLocal
        data={transformDataToWordCloud(imageCategories2)}
        categories={Object.keys(imageCategories2)}
      />
    </Container>
  );
};
export default WordCloudLocalPage;
