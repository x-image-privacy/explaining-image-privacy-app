import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { FC } from 'react';

import { ImageKeyword } from '../types';

type Props = {
  data: ImageKeyword[];
};

const HistogramBar: FC<Props> = ({ data }) => (
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
    <YAxis domain={[0, 1]} />
    <Tooltip />
    <Legend />
    <Bar dataKey="confidence" fill="#82ca9d" />
  </BarChart>
);

export default HistogramBar;
