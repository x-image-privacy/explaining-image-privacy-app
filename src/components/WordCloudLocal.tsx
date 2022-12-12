import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TagCloud } from 'react-tagcloud';

import { Box, Container, Text } from '@chakra-ui/react';

import { WordCloudKeyword } from '../types';
import WordCloudLegend from './WordCloudLegend';

type Props = {
  data: WordCloudKeyword[];
  categories: string[];
};
const WordCloudLocal: FC<Props> = ({ data, categories }) => {
  const { t } = useTranslation();
  return (
    <Container maxW="80vw" padding="3" centerContent gap={6}>
      <Text as="i" color="gray">
        {t('WORDCLOUD_DESCRIPTION')}
      </Text>
      <Box
        as={TagCloud}
        sx={{ textAlign: 'center' }}
        maxSize={40}
        minSize={10}
        tags={data}
      />
      <WordCloudLegend categories={categories} />
    </Container>
  );
};
export default WordCloudLocal;
