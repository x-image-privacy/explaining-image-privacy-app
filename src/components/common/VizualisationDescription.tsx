import { FC, PropsWithChildren } from 'react';

import { Center, Text } from '@chakra-ui/react';

const VizualisationDescription: FC<PropsWithChildren> = ({ children }) => (
  <Center w="80%">
    <Text as="i" color="gray" textAlign="justify" fontSize="0.9rem">
      {children}
    </Text>
  </Center>
);
export default VizualisationDescription;
