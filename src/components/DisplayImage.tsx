import { FC } from 'react';

import { Box, Image } from '@chakra-ui/react';

import { DISPLAY_IMAGE_CY } from '../config/selectors';

const DisplayImage: FC = () => (
  <Box boxSize="sm" mt="28" id={DISPLAY_IMAGE_CY}>
    <Image src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
  </Box>
);
export default DisplayImage;
