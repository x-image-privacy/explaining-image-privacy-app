import { FC, useEffect, useState } from 'react';

import { Container } from '@chakra-ui/react';

import DisplayImage from '../components/DisplayImage';
import SimpleLocal from '../components/SimpleLocal';
import imageLabels from '../data/image_label.json';
import { CategoryData } from '../types';
import { fetchImageData, splitKeywordsInCategories } from '../utils/imageData';

const SimpleLocalPage: FC = () => {
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
    <Container w="100vw" p={3}>
      <DisplayImage imageId={imageId1} mt={2} />
      <SimpleLocal data={imageCategories1} />
      <DisplayImage imageId={imageId2} mt={2} />
      <SimpleLocal data={imageCategories2} />
    </Container>
  );
};
export default SimpleLocalPage;
