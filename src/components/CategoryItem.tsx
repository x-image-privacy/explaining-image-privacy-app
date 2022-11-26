// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Legend,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from 'recharts';
import { FC, PropsWithChildren } from 'react';

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';

// import { HistorgamCategory } from '../types';

type Props = {
  title: string;
  content: string;
  // file: HistorgamCategory;
};

const CategoryItem: FC<PropsWithChildren<Props>> = ({
  title,
  content,
  children,
}) => (
  // const url = window.location.href;

  // const urlSplit = url.split('/?');
  // const urlId = urlSplit[1];

  <AccordionItem>
    <AccordionButton>
      <AccordionIcon />
      {title}
    </AccordionButton>
    <AccordionPanel>{content}</AccordionPanel>
    {/* <BarChart
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
          </BarChart> */}
    {children && <AccordionPanel> {children} </AccordionPanel>}
  </AccordionItem>
);

export default CategoryItem;
