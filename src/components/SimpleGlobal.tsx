import { FC } from 'react';

import { Box, HStack } from '@chakra-ui/react';

import { GRAPH_CONTAINER_CY } from '../config/selectors';
import { ChordCategory } from '../types';
import MyResponsiveChord from './MyResponsiveChord';
import dataChord from './dataChordPacking.json';

const SimpleGlobal: FC = () => (
  <HStack id={GRAPH_CONTAINER_CY} spacing={2} width="100%">
    <Box w="50%" h="600px" p={1} display="flex" justifyContent="center">
      <MyResponsiveChord data={dataChord as unknown as ChordCategory} />
    </Box>
    <Box w="50%" p={1}>
      Explanations
    </Box>
  </HStack>
);

export default SimpleGlobal;
