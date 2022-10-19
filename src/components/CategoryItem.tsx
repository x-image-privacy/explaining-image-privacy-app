import { FC } from 'react';

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';

type Props = {
  title: string;
  content: string;
};

const CategoryItem: FC<Props> = ({ title, content }) => (
  <AccordionItem>
    <AccordionButton>
      <AccordionIcon />
      {title}
    </AccordionButton>
    <AccordionPanel>{content}</AccordionPanel>
  </AccordionItem>
);
export default CategoryItem;
