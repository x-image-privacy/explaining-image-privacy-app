import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Box, Button, Container, Select, Text } from '@chakra-ui/react';

import DisplayImage from '../components/DisplayImage';
import SimpleLocal from '../components/SimpleLocal';
import imageLabels from '../data/image_label.json';
import { CategoryData } from '../types';
import { fetchImageData, splitKeywordsInCategories } from '../utils/imageData';

const SimpleLocalPage: FC = () => {
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
        <Link to="/">
          <Button>Back</Button>
        </Link>
        <Text>{t('Select an image')}</Text>
        <Select
          onChange={({ target }) => {
            const newImageId = target.value;
            setImageId(newImageId);
            fetchImageData(newImageId, (imageKeywords) => {
              setImageCategories(splitKeywordsInCategories(imageKeywords));
            });
          }}
          value={imageId}
        >
          {Object.keys(imageLabels).map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </Select>
      </Box>
      <DisplayImage imageId={imageId} mt={2} />
      <SimpleLocal data={imageCategories} />
    </Container>
  );
};
export default SimpleLocalPage;
