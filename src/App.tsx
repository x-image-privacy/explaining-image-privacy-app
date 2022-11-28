import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, HStack, Heading, Select, Text, VStack } from '@chakra-ui/react';

import CategoryExplanations from './components/CategoryExplanations';
import DisplayImage from './components/DisplayImage';
import MoreInfo from './components/MoreInfo';
import MyResponsiveChord from './components/MyResponsiveChord';
import MyResponsiveCirclePacking from './components/MyResponsiveCirclePacking';
import AppBar from './components/common/AppBar';
// import data from './components/data.json';
import dataChord from './components/dataChordPacking.json';
import {
  CONTENT_CONTAINER_CY,
  GRAPH_CONTAINER_CY,
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
        <Box>
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
        <HStack id={GRAPH_CONTAINER_CY} spacing={2} width="100%">
          <Box w="50%" h="600px" p={1} display="flex" justifyContent="center">
            {(urlId === '1' && (
              <MyResponsiveCirclePacking
                data={transformDataToBubbles(imageCategories)}
              />
            )) ||
              (urlId === '2' && (
                <MyResponsiveChord
                  data={dataChord as unknown as ChordCategory}
                />
              )) || (
                <MyResponsiveChord
                  data={dataChord as unknown as ChordCategory}
                />
              )}
          </Box>
          <Box w="50%" p={1}>
            <CategoryExplanations />
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default App;
