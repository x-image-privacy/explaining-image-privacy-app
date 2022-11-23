import { FC } from 'react';

import { Box, Image } from '@chakra-ui/react';

import { DISPLAY_IMAGE_CY } from '../config/selectors';
import { getImagePath } from '../utils/imageData';

type Props = {
  imageId: string;
  mt: number;
};
const DisplayImage: FC<Props> = ({ mt, imageId }) => (
  <Box mt={mt} id={DISPLAY_IMAGE_CY} p={3}>
    <Image src={getImagePath(imageId)} />
  </Box>
);
export default DisplayImage;
