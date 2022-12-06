import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Container, Text } from '@chakra-ui/react';

import DisplayImage from '../components/DisplayImage';
import DynamicLocal from '../components/DynamicLocal';
import ImageSelect from '../components/ImageSelect';
import imageLabels from '../data/image_label.json';
import { CategoryData } from '../types';
import { fetchImageData, splitKeywordsInCategories } from '../utils/imageData';

const DynamicLocalPage: FC = () => {
  const { t } = useTranslation();

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
    <Container>
      <Box>
        <Text>{t('Select an image')}</Text>
        <ImageSelect
          imageId={imageId}
          setImageId={setImageId}
          setImageCategories={setImageCategories}
        />
      </Box>
      <DisplayImage imageId={imageId} mt={2} />
      <DynamicLocal data={imageCategories} />
    </Container>
  );
};
export default DynamicLocalPage;
