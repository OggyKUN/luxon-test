import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import tr from "./locales/tr.json";
import es from "./locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    English: { translation: en },
    Turkish: { translation: tr },
    Spain: { translation: es },
  },
  lng: "Turkish",
  fallbackLng: "English",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
