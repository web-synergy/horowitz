import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enLocale from "./locales/en/translation";
import uaLocale from "./locales/ua/translation";
import { localeLocalStorageKey } from "../../libs/localStorageKeys";
import { lang } from "../../libs/searchParamsKey";
import { languages } from "#root/languages";

const langByDefault = languages.find((lang) => lang.default)?.id || "ua";

const customPath = {
  name: "fromPath",
  lookup() {
    let found;
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get(lang);
      if (langParam) {
        const isLangExist = languages.find((lang) => lang.id === langParam);

        found = isLangExist ? langParam : langByDefault;
      }
    }
    return found;
  },
};

const defaultLang = {
  name: "defaultLang",
  lookup() {
    return langByDefault;
  },
};

const languageDetector = new LanguageDetector();

languageDetector.addDetector(customPath);
languageDetector.addDetector(defaultLang);

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["fromPath", "localStorage", "defaultLang"],
      lookupLocalStorage: localeLocalStorageKey,
    },
    resources: {
      en: { translation: enLocale },
      ua: { translation: uaLocale },
    },
  });
