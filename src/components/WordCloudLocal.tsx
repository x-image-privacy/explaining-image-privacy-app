import { FC } from 'react';
import { TagCloud } from 'react-tagcloud';

import { Box, Container } from '@chakra-ui/react';

import { WordCloudKeyword } from '../types';

type Props = { data: WordCloudKeyword[] };
const WordCloudLocal: FC<Props> = ({ data }) => (
  <Container maxW="80vw" padding="3" centerContent>
    <Box
      as={TagCloud}
      sx={{ textAlign: 'center' }}
      maxSize={40}
      minSize={10}
      tags={data}
    />
  </Container>
);
export default WordCloudLocal;
