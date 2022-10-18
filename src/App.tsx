import { useTranslation } from 'react-i18next';

import { Heading, Text, VStack } from '@chakra-ui/react';

import CategoryExplanations from './components/CategoryExplanations';
import MoreInfo from './components/MoreInfo';
import AppBar from './components/common/AppBar';
import { MAIN_CONTAINER_CY, MAIN_HEADING_CY } from './config/selectors';

function App() {
  const { t } = useTranslation();

  return (
    <VStack id={MAIN_CONTAINER_CY}>
      <AppBar />
      <Heading id={MAIN_HEADING_CY}>{t('MAIN_HEADING')}</Heading>
      <Text p={8} w="xxl">
        Image privacy is the concept of what can be considered of interest to
        some people, but not of interest to others. There might be some things
        that users consider private, and they would not like to share those with
        others.
      </Text>
      <MoreInfo />
      <CategoryExplanations />
    </VStack>
  );
}

export default App;
