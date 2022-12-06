import { FC, useEffect, useState } from 'react';

import { Box, Container } from '@chakra-ui/react';

import DisplayImage from '../components/DisplayImage';
import ImageSelect from '../components/ImageSelect';
import SimpleLocal from '../components/SimpleLocal';
import imageLabels from '../data/image_label.json';
import { CategoryData } from '../types';
import { fetchImageData, splitKeywordsInCategories } from '../utils/imageData';

const SimpleLocalPage: FC = () => {
  const defaultImage = Object.keys(imageLabels)[0];
  const [imageId, setImageId] = useState<string>(Object.keys(imageLabels)[0]);
  const [imageCategories, setImageCategories] = useState<CategoryData>({});

  useEffect(
    () => {
      fetchImageData(defaultImage, (imageData) =>
        setImageCategories(splitKeywordsInCategories(imageData)),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Container w="100pw">
      <Box>
        <ImageSelect
          imageId={imageId}
          setImageId={setImageId}
          setImageCategories={setImageCategories}
        />
      </Box>
      <DisplayImage imageId={imageId} mt={2} />
      <SimpleLocal data={imageCategories} />
    </Container>
  );
};
export default SimpleLocalPage;
