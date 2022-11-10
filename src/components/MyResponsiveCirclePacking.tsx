// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/circle-packing
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

import { FC, useState } from 'react';

import { BubbleCategory } from '../types';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

type Props = { data: BubbleCategory };
const MyResponsiveCirclePacking: FC<Props> = ({ data /* see data tab */ }) => {
  const [zoomedId, setZoomedId] = useState<string | null>(null);

  return (
    <ResponsiveCirclePacking
      zoomedId={zoomedId}
      motionConfig="slow"
      onClick={(node: { id: string | null }) => {
        setZoomedId(zoomedId === node.id ? null : node.id);
      }}
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      id="name"
      value="value"
      colors={(d) => d.data.color || '#FF0000'}
      childColor={{
        from: 'color',
        modifiers: [['brighter', 0.4]],
      }}
      padding={24}
      enableLabels
      labelsFilter={(n: { node: { depth: number } }) => n.node.depth === 2}
      labelsSkipRadius={10}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.5]],
      }}
      defs={[
        {
          id: 'lines',
          type: 'patternLines',
          background: 'none',
          color: 'inherit',
          rotation: -45,
          lineWidth: 5,
          spacing: 8,
        },
      ]}
      fill={[
        {
          match: {
            depth: 1,
          },
          id: 'lines',
        },
      ]}
    />
  );
};

export default MyResponsiveCirclePacking;
