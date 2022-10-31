import { FC } from 'react';

import { Box, Image } from '@chakra-ui/react';

import { DISPLAY_IMAGE_CY } from '../config/selectors';
import TestImage from '../images/test.jpg';

type Props = { mt: number };
const DisplayImage: FC<Props> = ({ mt }) => (
  <Box mt={mt} id={DISPLAY_IMAGE_CY} p={3}>
    <Image src={TestImage} />
  </Box>
);
export default DisplayImage;
