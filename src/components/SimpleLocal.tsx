import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Accordion, Box } from '@chakra-ui/react';

import { CategoryData } from '../types';
import CategoryItem from './CategoryItem';
import HistogramBar from './HistogramBar';

type Props = {
  data: CategoryData;
};

const SimpleLocal: FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Box w="100%" p={1}>
      <Accordion allowToggle>
        {Object.keys(data)
          .sort()
          .map((cat) => (
            <CategoryItem
              key={cat}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              title={t(`${cat.toUpperCase()}_CATEGORY`)}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
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
