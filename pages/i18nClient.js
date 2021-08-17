
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../public/locales/en/common.json';
import pt from '../public/locales/pt/common.json';

import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          ...en
        }
      },
      pt: {
        translation: {
          ...pt
        }
      }
    },
    fallbackLng: "en",
    whitelist: ['en', 'pt'],
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      checkWhitelist: true
    },
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


  export default i18n;