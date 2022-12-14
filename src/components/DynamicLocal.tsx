import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Accordion, Box, Center, HStack } from '@chakra-ui/react';

import { GRAPH_CONTAINER_CY } from '../config/selectors';
import { CategoryData, CategoryNames } from '../types';
import { transformDataToBubbles } from '../utils/imageData';
import BubblePlot from './BubblePlot';
import CategoryItem from './CategoryItem';
import VizualisationDescription from './common/VizualisationDescription';

type Props = { data: CategoryData };
const DynamicLocal: FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Center flexDirection="column">
      <VizualisationDescription>
        {t('DYNAMIC_LOCAL_DESCRIPTION')}
      </VizualisationDescription>
      <HStack id={GRAPH_CONTAINER_CY} spacing={2} width="100%">
        <Box
          flex={1}
          h="600px"
          p={1}
          display="flex"
          justifyContent="center"
          minWidth={500}
        >
          <BubblePlot data={transformDataToBubbles(data)} />
        </Box>
        <Box flex={1} p={1}>
          <Accordion allowToggle>
            {Object.keys(data)
              .sort()
              .filter((cat) => cat !== CategoryNames.NotApplicable)
              .map((cat) => (
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
    </Center>
  );
};
export default DynamicLocal;
