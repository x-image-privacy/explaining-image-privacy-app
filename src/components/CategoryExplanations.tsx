import { FC } from 'react';

import { Accordion } from '@chakra-ui/react';

import CategoryItem from './CategoryItem';

const CategoryExplanations: FC = () => (
  <Accordion allowToggle>
    <CategoryItem
      title="Identity"
      content="This category talks about the first category of interest for us."
    />
    <CategoryItem
      title="Sexual orientations"
      content="Section talks about the first category of interest for us."
    />
    <CategoryItem
      title="Political opinions"
      content="Section talks about the first category of interest for us."
    />
    <CategoryItem
      title="Wealth"
      content="Another category that talks about some other things."
    />
    <CategoryItem
      title="Social status and activities"
      content="Another category that talks about some other things."
    />
    <CategoryItem
      title="Religions"
      content="Another category that talks about some other things."
    />
    <CategoryItem
      title="Ethnicity"
      content="Another category that talks about some other things."
    />
    <CategoryItem
      title="Health"
      content="Another category that talks about some other things."
    />
    <CategoryItem
      title="Job"
      content="Another category that talks about some other things."
    />
    <CategoryItem
      title="Emotions"
      content="Another category that talks about some other things."
    />
  </Accordion>
);
export default CategoryExplanations;
