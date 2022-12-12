import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TagCloud } from 'react-tagcloud';

import { Box, Container } from '@chakra-ui/react';

import { WordCloudKeyword } from '../types';
import WordCloudLegend from './WordCloudLegend';
import VizualisationDescription from './common/VizualisationDescription';

type Props = {
  data: WordCloudKeyword[];
  categories: string[];
};
const WordCloudLocal: FC<Props> = ({ data, categories }) => {
  const { t } = useTranslation();
  return (
    <Container maxW="80vw" padding="3" centerContent gap={6}>
      <VizualisationDescription>
        {t('WORDCLOUD_DESCRIPTION')}
      </VizualisationDescription>
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
