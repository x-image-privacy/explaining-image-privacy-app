import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '@chakra-ui/react';

import { LANGUAGE_SELECT_CY } from '../../config/selectors';

const LanguageSelect: FC = () => {
  const { i18n } = useTranslation();
  return (
    <Select
      id={LANGUAGE_SELECT_CY}
      w="fit-content"
      value={i18n.resolvedLanguage}
      variant="filled"
      onChange={({ target }) => i18n.changeLanguage(target.value)}
    >
      <option value="fr">Français</option>
      <option value="en">English</option>
    </Select>
  );
};

export default LanguageSelect;
