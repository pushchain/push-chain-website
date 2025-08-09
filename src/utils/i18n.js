// External Components
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// Load Languages
import english from '/static/locales/en/translation.json';
import chineseSimplified from '/static/locales/zh-CN/translation.json';
import spanish from '/static/locales/es/translation.json';
import hindi from '/static/locales/hi/translation.json';
import japanese from '/static/locales/ja/translation.json';
import korean from '/static/locales/ko/translation.json';
import portuguese from '/static/locales/pt/translation.json';
import russian from '/static/locales/ru/translation.json';
import turkish from '/static/locales/tr/translation.json';
import french from '/static/locales/fr/translation.json';
import indonesian from '/static/locales/id/translation.json';
import vietnamese from '/static/locales/vi/translation.json';
import german from '/static/locales/de/translation.json';
import arabic from '/static/locales/ar/translation.json';

export default function i18nInitialize() {
  i18n
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: english },
        'zh-CN': { translation: chineseSimplified },
        es: { translation: spanish },
        hi: { translation: hindi },
        ja: { translation: japanese },
        ko: { translation: korean },
        pt: { translation: portuguese },
        ru: { translation: russian },
        tr: { translation: turkish },
        fr: { translation: french },
        id: { translation: indonesian },
        vi: { translation: vietnamese },
        de: { translation: german },
        ar: { translation: arabic },
      },
      lng: 'en', // default language for SSR
      fallbackLng: 'en', // fallback language
      debug: false,

      // Language detection configuration
      detection: {
        // order and from where user language should be detected
        order: [
          'localStorage',
          'sessionStorage',
          'navigator',
          'htmlTag',
          'path',
          'subdomain',
        ],

        // keys or params to lookup language from
        lookupLocalStorage: 'i18nextLng',
        lookupSessionStorage: 'i18nextLng',

        // cache user language on
        caches: ['localStorage'],

        // optional expire and domain for set cookie
        cookieMinutes: 10080, // 7 days

        // optional htmlTag with lang attribute
        htmlTag: document.documentElement,

        // only detect languages that are in the whitelist
        checkWhitelist: true,
      },

      // Whitelist of supported languages
      whitelist: [
        'en',
        'zh-CN',
        'es',
        'hi',
        'ja',
        'ko',
        'pt',
        'ru',
        'tr',
        'fr',
        'id',
        'vi',
        'de',
        'ar',
      ],

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },

      react: {
        useSuspense: false, // Set to false to disable suspense
      },
    });
}
