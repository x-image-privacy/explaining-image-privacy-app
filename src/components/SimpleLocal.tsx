import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Accordion, Box } from '@chakra-ui/react';

import { CategoryData } from '../types';
import CategoryExplanations from './CategoryExplanations';
import CategoryItem from './CategoryItem';
import HistogramBar from './HistogramBar';

type Props = {
  data: CategoryData;
};

const SimpleLocal: FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Box w="100%" p={1}>
      <Accordion>
        {Object.keys(data).map((cat) => (
          <CategoryItem
            key={cat}
            title={t(`${cat.toUpperCase()}_CATEGORY`)}
            content={t(`${cat.toUpperCase()}_CATEGORY_CONTENT`)}
          >
            <HistogramBar file={data[cat]} />
          </CategoryItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default SimpleLocal;
