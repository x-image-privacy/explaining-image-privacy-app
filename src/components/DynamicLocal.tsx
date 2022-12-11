import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Accordion, Box, HStack } from '@chakra-ui/react';

import { GRAPH_CONTAINER_CY } from '../config/selectors';
import { CategoryData } from '../types';
import { transformDataToBubbles } from '../utils/imageData';
import BubblePlot from './BubblePlot';
import CategoryItem from './CategoryItem';

type Props = { data: CategoryData };
const DynamicLocal: FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <HStack id={GRAPH_CONTAINER_CY} spacing={2} width="100%">
      <Box w="50%" h="600px" p={1} display="flex" justifyContent="center">
        <BubblePlot data={transformDataToBubbles(data)} />
      </Box>
      <Box w="50%" p={1}>
        <Accordion allowToggle>
          {Object.keys(data)
            .sort()
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
  );
};
export default DynamicLocal;
