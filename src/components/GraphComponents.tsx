import { FC } from 'react';

import { CategoryData } from '../types';
import DynamicGlobal from './DynamicGlobal';
import DynamicLocal from './DynamicLocal';
import SimpleGlobal from './SimpleGlobal';
import SimpleLocal from './SimpleLocal';

type Props = {
  data: CategoryData;
};

const GraphComponents: FC<Props> = ({ data }) => {
  const url = window.location.href;

  const urlSplit = url.split('/?');
  const urlId = urlSplit[1];

  switch (urlId) {
    case '1':
      return <SimpleLocal data={data} />;
    case '2':
      return <DynamicLocal />;
    case '3':
      return <SimpleGlobal />;

    case '4':
    default:
      return <DynamicGlobal />;
  }
};
export default GraphComponents;
