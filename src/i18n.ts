import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTrans from "./locales/en.json";
import zhTrans from "./locales/zh.json";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: enTrans
  },
  zh: {
    translation: zhTrans
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    resources,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;