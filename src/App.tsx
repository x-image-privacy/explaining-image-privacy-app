import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';

import CategoryExplanations from './components/CategoryExplanations';
import DisplayImage from './components/DisplayImage';
import MoreInfo from './components/MoreInfo';
import MyResponsiveChord from './components/MyResponsiveChord';
import MyResponsiveCirclePacking from './components/MyResponsiveCirclePacking';
import AppBar from './components/common/AppBar';
import data from './components/data.json';
import dataChord from './components/dataChordPacking.json';
import {
  CONTENT_CONTAINER_CY,
  GRAPH_CONTAINER_CY,
  MAIN_CONTAINER_CY,
  MAIN_HEADING_CY,
} from './config/selectors';
import { BubbleCategory, ChordCategory } from './types';

const App: FC = () => {
  const { t } = useTranslation();
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
        <HStack id={GRAPH_CONTAINER_CY} spacing={2} width="100%">
          {(urlId === '1' && (
            <>
              <Box
                w="50%"
                h="600px"
                p={1}
                display="flex"
                justifyContent="center"
              >
                <MyResponsiveCirclePacking
                  data={data as unknown as BubbleCategory}
                />
              </Box>
              <Box w="50%" p={1}>
                <CategoryExplanations />
              </Box>
            </>
          )) ||
            (urlId === '2' && (
              <>
                <Box
                  w="50%"
                  h="600px"
                  p={1}
                  display="flex"
                  justifyContent="center"
                >
                  <MyResponsiveChord
                    data={dataChord as unknown as ChordCategory}
                  />
                </Box>
                <Box w="50%" p={1}>
                  <CategoryExplanations />
                </Box>
              </>
            )) ||
            (url === '3' && (
              <Box w="100%" p={1}>
                <CategoryExplanations />
              </Box>
            )) || (
              <>
                <Box
                  w="50%"
                  h="600px"
                  p={1}
                  display="flex"
                  justifyContent="center"
                >
                  <MyResponsiveCirclePacking
                    data={data as unknown as BubbleCategory}
                  />
                </Box>
                <Box w="50%" p={1}>
                  <CategoryExplanations />
                </Box>
              </>
            )}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default App;
