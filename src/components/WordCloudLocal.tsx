import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TagCloud } from 'react-tagcloud';

import { Accordion, Box, Container, HStack } from '@chakra-ui/react';

import { WordCloudKeyword } from '../types';
import CategoryItem from './CategoryItem';
import WordCloudLegend from './WordCloudLegend';
import VizualisationDescription from './common/VizualisationDescription';

type Props = {
  data: WordCloudKeyword[];
  categories: string[];
};

const WordCloudLocal: FC<Props> = ({ data, categories }) => {
  const { t } = useTranslation();
  return (
    <Container maxW="100vw" padding="3" centerContent gap={6}>
      <VizualisationDescription>
        {t('WORDCLOUD_DESCRIPTION')}
      </VizualisationDescription>
      <HStack spacing={2} width="100%">
        <Box flex={2} p={1} flexDirection="column">
          <Box
            as={TagCloud}
            sx={{ textAlign: 'center' }}
            maxSize={40}
            minSize={10}
            tags={data}
          />
          <WordCloudLegend categories={categories} />
        </Box>
        <Box flex={1} p={1}>
          <Accordion allowToggle>
            {categories.map((cat) => (
              <CategoryItem
                key={cat}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                title={t(`${cat.toUpperCase()}_CATEGORY`)}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                content={t(`${cat.toUpperCase()}_CATEGORY_CONTENT`)}
              />
            ))}
          </Accordion>
        </Box>
      </HStack>
    </Container>
  );
};
export default WordCloudLocal;
