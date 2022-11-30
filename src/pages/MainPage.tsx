import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Heading, Text, VStack } from '@chakra-ui/react';

import MoreInfo from '../components/MoreInfo';
import AppBar from '../components/common/AppBar';
import {
  DYNAMIC_LOCAL_ROUTE,
  SIMPLE_LOCAL_ROUTE,
  WORD_CLOUD_LOCAL_ROUTE,
} from '../config/routes';
import {
  CONTENT_CONTAINER_CY,
  MAIN_CONTAINER_CY,
  MAIN_HEADING_CY,
} from '../config/selectors';

const MainPage: FC = () => {
  const { t } = useTranslation();
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
        <Link to={SIMPLE_LOCAL_ROUTE}>
          <Button>Simple Local Graph</Button>
        </Link>
        <Link to={DYNAMIC_LOCAL_ROUTE}>
          <Button>Dynamic Local Graph</Button>
        </Link>
        <Link to={WORD_CLOUD_LOCAL_ROUTE}>
          <Button>Word Cloud Local Graph</Button>
        </Link>
      </VStack>
    </VStack>
  );
};
export default MainPage;
