import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { InfoIcon } from '@chakra-ui/icons';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import {
  MORE_INFO_BUTTON_CY,
  MORE_INFO_MODAL_CLOSE_BUTTON_CY,
  MORE_INFO_MODAL_CY,
  MORE_INFO_MODAL_TITLE_CY,
} from '../config/selectors';

const MoreInfo: FC = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        id={MORE_INFO_BUTTON_CY}
        colorScheme="purple"
        leftIcon={<InfoIcon />}
        onClick={onOpen}
      >
        {t('MORE_INFO_BUTTON')}
      </Button>

      <Modal
        id={MORE_INFO_MODAL_CY}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader id={MORE_INFO_MODAL_TITLE_CY}>
            {t('MORE_INFO_MODAL_TITLE')}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{t('MORE_INFO_CONTENT')}</ModalBody>
          <ModalFooter>
            <Button id={MORE_INFO_MODAL_CLOSE_BUTTON_CY} onClick={onClose}>
              {t('CLOSE_BUTTON')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default MoreInfo;
