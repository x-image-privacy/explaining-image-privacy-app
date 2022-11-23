import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from 'react-i18next';

import en from '../langs/en.json';
import fr from '../langs/fr.json';

export const resources = {
  en,
  fr,
};
export const defaultNS = 'translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    // debug only when not in production
    debug: process.env.NODE_ENV !== 'production',
    ns: [defaultNS],
    defaultNS,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  });
export default i18n;
