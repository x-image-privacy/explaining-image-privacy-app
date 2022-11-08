import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Accordion } from '@chakra-ui/react';

import CategoryItem from './CategoryItem';

const CategoryExplanations: FC = () => (
  <Accordion allowToggle>
    <CategoryItem
      title="Identity"
      content="This category talks about the unique set of characteristics 
      that can be used to identify a person as themself and no one else."
    />

    <CategoryItem
      title="Sexual orientations"
      content="This category talks about one's inherent attraction to a 
      sexual partner of a certain gender, or the absence of gender preference 
      in a sexual relationship."
    />
    <CategoryItem
      title="Political opinions"
      content="This category talks about to a broad category of attitudes that
      people might have on matters that concern their state, their government, 
      or their society."
    />
    <CategoryItem
      title="Wealth"
      content="This category talks about the value of all the assets of worth 
      owned by a person, community, compagny, or country."
    />
    <CategoryItem
      title="Social status and activities"
      content="This category talks about the social position that an individual 
      occupies within a given social organisation. It is related to a set of
      rights and social norms that prevail in a given cultural group."
    />
    <CategoryItem
      title="Religions"
      content="This category talks about a set of practices specific to a belief or
      social group."
    />
    <CategoryItem
      title="Ethnicity"
      content="This category talks about the identity with or membership in a 
      particular racial, national, or cultural group and observance of that
      group's customs, beliefs, and language."
    />
    <CategoryItem
      title="Health"
      content="This category talks about the condition of an organism or one of its
      parts in which it performs its vital functions normally or properly."
    />
    <CategoryItem
      title="Job"
      content="This category talks about the work that a person does regularly in 
      order to earn money."
    />
    <CategoryItem
      title="Emotions"
      content="This category talks about a spontaneous mental reaction, such as joy, 
      sorrow, hate, and love."
    />
  </Accordion>
);
export default CategoryExplanations;
