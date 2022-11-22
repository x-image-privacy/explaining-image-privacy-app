import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { FC, PropsWithChildren } from 'react';

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';

// import dataIdentity from './dataIdentity.json';

type Props = {
  title: string;
  content: string;
};

const CategoryItem: FC<PropsWithChildren<Props>> = ({ title, content }) => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
    },
    {
      name: 'Page B',
      uv: 3000,
    },
    {
      name: 'Page C',
      uv: 2000,
    },
    {
      name: 'Page D',
      uv: 2780,
    },
    {
      name: 'Page E',
      uv: 1890,
    },
    {
      name: 'Page F',
      uv: 2390,
    },
    {
      name: 'Page G',
      uv: 3490,
    },
  ];

  const url = window.location.href;

  const urlSplit = url.split('/?');
  const urlId = urlSplit[1];

  return (
    <AccordionItem>
      <AccordionButton>
        <AccordionIcon />
        {title}
      </AccordionButton>
      <AccordionPanel>{content}</AccordionPanel>
      {urlId === '3' && (
        <AccordionPanel>
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </AccordionPanel>
      )}
    </AccordionItem>
  );
};
export default CategoryItem;
