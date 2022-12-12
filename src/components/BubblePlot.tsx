// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/circle-packing
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

import { FC, useState } from 'react';

import { IMAGE_ID } from '../config/constants';
import { BubbleCategory } from '../types';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

type Props = { data: BubbleCategory };
const BubblePlot: FC<Props> = ({ data }) => {
  const [zoomedId, setZoomedId] = useState<string | null>(null);

  return (
    <ResponsiveCirclePacking
      zoomedId={zoomedId}
      motionConfig="slow"
      onClick={(node: { id: string | null }) => {
        setZoomedId(zoomedId === node.id ? null : node.id);
      }}
      colors={{ scheme: 'category10' }}
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      id="name"
      valueFormat={(value) => `${value}`}
      childColor={{
        from: 'color',
        modifiers: [['brighter', 0.6]],
      }}
      padding={24}
      enableLabels
      labelsFilter={(n: { node: { depth: number } }) => n.node.depth === 2}
      labelsSkipRadius={5}
      labelTextColor="#000"
      // eslint-disable-next-line react/no-unstable-nested-components
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
        {
          id: 'none',
          background: 'none',
          type: 'patternLines',
          color: 'none',
          borderColor: 'gray',
        },
      ]}
      colorBy="id"
      inheritColorFromParent
      // eslint-disable-next-line react/no-unstable-nested-components
      tooltip={({ id, value }) =>
        id !== IMAGE_ID ? (
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2px 8px',
              borderRadius: '4px',
              border: '1px solid silver',
            }}
          >
            {value <= 1 ? (
              <div style={{ fontSize: '0.85rem' }}>
                {id}: <strong>{value}</strong>
              </div>
            ) : (
              <div>{id}</div>
            )}
          </div>
        ) : (
          <div> </div>
        )
      }
      fill={[
        {
          match: {
            depth: 0,
          },
          id: 'none',
        },
      ]}
    />
  );
};

export default BubblePlot;
