import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/index';
import ko from './locales/ko/index';

const resources = {
  en: { translation: {...en} },
  ko: { translation: {...ko} },
}

const userLanguage = window.navigator.language ;
// || window.navigator.userLanguage

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || userLanguage || 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  nsSeparator:':',
  interpolation: {
    escapeValue: false
  }
})

export default i18n;