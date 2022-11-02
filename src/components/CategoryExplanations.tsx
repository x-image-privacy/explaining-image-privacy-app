import { FC } from 'react';

import { Accordion, Box } from '@chakra-ui/react';

import CategoryItem from './CategoryItem';

const CategoryExplanations: FC = () => (
  <Box w="100%" p={8}>
    <Accordion allowToggle>
      <CategoryItem
        title="Category 1"
        content="This category talks about the first category of interest for us.
        This category talks about the first category of interest for us.
        This category talks about the first category of interest for us.
        "
      />
      <CategoryItem
        title="Category 2"
        content="Section talks about the first category of interest for us."
      />
      <CategoryItem
        title="Category 3"
        content="Section talks about the first category of interest for us."
      />
      <CategoryItem
        title="Category 4"
        content="Another category that talks about some other things."
      />
    </Accordion>
  </Box>
);
export default CategoryExplanations;
