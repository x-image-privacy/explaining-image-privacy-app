import { FC, PropsWithChildren } from 'react';

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

const CategoryItem: FC<PropsWithChildren<Props>> = ({
  title,
  content,
  children,
}) => (
  <AccordionItem>
    <AccordionButton>
      <AccordionIcon />
      {title}
    </AccordionButton>
    <AccordionPanel>{content}</AccordionPanel>
    {children && <AccordionPanel> {children} </AccordionPanel>}
  </AccordionItem>
);

export default CategoryItem;
