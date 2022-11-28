import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Heading, Text, VStack } from '@chakra-ui/react';


import DisplayImage from './components/DisplayImage';
import GraphComponents from './components/GraphComponents';
import MoreInfo from './components/MoreInfo';
import AppBar from './components/common/AppBar';

import {
  CONTENT_CONTAINER_CY,
  MAIN_CONTAINER_CY,
  MAIN_HEADING_CY,
} from './config/selectors';

import imageLabels from './data/image_label.json';
import { CategoryData, ChordCategory } from './types';
import {
  fetchImageData,
  splitKeywordsInCategories,
  transformDataToBubbles,
} from './utils/imageData';

const App: FC = () => {
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

  const url = window.location.href;

  const urlSplit = url.split('/?');
  const urlId = urlSplit[1];

  return (
    <VStack id={MAIN_CONTAINER_CY}>
      <AppBar />
      <VStack id={CONTENT_CONTAINER_CY} p={3}>
        <Heading id={MAIN_HEADING_CY}>{t('MAIN_HEADING')}</Heading>
        <Text p={8} w="xxl">
          Image privacy is the concept of what can be considered of interest to
          some people, but not of interest to others. There might be some things
          that users consider private, and they would not like to share those
          with others.
        </Text>
        <MoreInfo />
        <DisplayImage mt={2} />
        <GraphComponents />
      </VStack>
    </VStack>
  );
};

export default App;
