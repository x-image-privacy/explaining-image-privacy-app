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

import { HistorgamCategory } from '../types';

type Props = {
  file: HistorgamCategory;
};

const HistogramBar: FC<Props> = ({ file }) => (
  <BarChart
    width={500}
    height={300}
    data={file}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="uv" fill="#82ca9d" />
  </BarChart>
);

export default HistogramBar;
