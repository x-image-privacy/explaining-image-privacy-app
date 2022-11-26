import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import CategoryExplanations from './CategoryExplanations';

const SimpleLocal: FC = () => (
  <Box w="100%" p={1}>
    <CategoryExplanations />
  </Box>
);

export default SimpleLocal;
