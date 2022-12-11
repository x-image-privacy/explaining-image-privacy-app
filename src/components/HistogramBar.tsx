import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ImageKeyword } from '../types';

type Props = {
  data: ImageKeyword[];
};

const HistogramBar: FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="keyword" />
      <YAxis
        domain={[0, 1]}
        label={{
          value: t('Confidence'),
          angle: -90,
          position: 'insideLeft',
          offset: 0,
        }}
      />
      <Tooltip />
      <Bar dataKey="confidence" fill="#82ca9d" />
    </BarChart>
  );
};
export default HistogramBar;
