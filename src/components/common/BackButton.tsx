import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const BackButton: FC = () => {
  const { t } = useTranslation();
  return (
    <Link to="/">
      <Button leftIcon={<ArrowBackIcon />}>{t('Back')}</Button>
    </Link>
  );
};
export default BackButton;
