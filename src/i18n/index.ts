import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import tr from "./locales/tr.json";
import es from "./locales/es.json";

export type Language = "English" | "Turkish" | "Spanish";

export const LANGUAGES: Language[] = ["Turkish", "English", "Spanish"];

const STORAGE_KEY = "luxon_language";
const DEFAULT_LANG: Language = "Turkish";

export const getStoredLanguage = (): Language => {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGUAGES.includes(stored as Language)) {
      return stored as Language;
    }
    return DEFAULT_LANG;
  }
  return DEFAULT_LANG;
};

const saveLanguage = (lng: Language): void => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(STORAGE_KEY, lng);
  }
};

i18n.use(initReactI18next);

i18n.on("languageChanged", (lng) => {
  saveLanguage(lng);
});

i18n.init({
  resources: {
    English: { translation: en },
    Turkish: { translation: tr },
    Spanish: { translation: es },
  },
  lng: getStoredLanguage(),
  fallbackLng: "English",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
