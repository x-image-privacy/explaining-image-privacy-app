import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex, Text } from '@chakra-ui/react';

import { getCategoryColor } from '../utils/imageData';

type Props = {
  categories: string[];
};

const WordCloudLegend: FC<Props> = ({ categories }) => {
  const { t } = useTranslation();
  return (
    <Flex wrap="wrap" gap={4}>
      {categories.map((c) => (
        <Flex key={c} gap={1} alignItems="center">
          <svg width={20} height={20}>
            <circle r={8} cx={10} cy={10} fill={getCategoryColor(c)} />
          </svg>
          <Text as="i" color="gray">
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              t(`${c.toUpperCase()}_CATEGORY`)
            }
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
export default WordCloudLegend;
