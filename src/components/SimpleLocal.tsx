import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Accordion, Container } from '@chakra-ui/react';

import { CategoryData, CategoryNames } from '../types';
import CategoryItem from './CategoryItem';
import HistogramBar from './HistogramBar';

type Props = {
  data: CategoryData;
};

const SimpleLocal: FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Container maxW="80%" p={3}>
      <Accordion allowToggle>
        {Object.keys(data)
          .sort()
          .filter((cat) => cat !== CategoryNames.NotApplicable)
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
              <HistogramBar data={data[cat]} />
            </CategoryItem>
          ))}
      </Accordion>
    </Container>
  );
};

export default SimpleLocal;
