import { FC } from 'react';

import { Box, HStack } from '@chakra-ui/react';

import { GRAPH_CONTAINER_CY } from '../config/selectors';
import { BubbleCategory } from '../types';
import CategoryExplanations from './CategoryExplanations';
import MyResponsiveCirclePacking from './MyResponsiveCirclePacking';
import data from './data.json';

const DynamicLocal: FC = () => (
  <HStack id={GRAPH_CONTAINER_CY} spacing={2} width="100%">
    <Box w="50%" h="600px" p={1} display="flex" justifyContent="center">
      <MyResponsiveCirclePacking data={data as unknown as BubbleCategory} />
    </Box>
    <Box w="50%" p={1}>
      <CategoryExplanations />
    </Box>
  </HStack>
);

export default DynamicLocal;
