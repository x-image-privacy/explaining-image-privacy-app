import { FC, PropsWithChildren } from 'react';

import { Accordion } from '@chakra-ui/react';

import CategoryItem from '../CategoryItem';

type Props = {
  title: string;
  content: string;
};
const CategoryObject: FC<PropsWithChildren<Props>> = ({
  title,
  content,
  children,
}) => (
  <Accordion allowToggle>
    <CategoryItem title={title} content={content} />
  </Accordion>
);

export default CategoryObject;
