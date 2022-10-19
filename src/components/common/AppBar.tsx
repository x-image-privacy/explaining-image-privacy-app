import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../ColorModeSwitcher';
import LanguageSelect from './LanguageSelect';

const AppBar: FC = () => (
  <HStack p={2} justifyContent="flex-end" w="100%">
    <LanguageSelect />
    <ColorModeSwitcher />
  </HStack>
);
export default AppBar;
