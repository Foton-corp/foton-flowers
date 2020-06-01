import armTranslations from './arm';
import enTranslations from './en';
import ruTranslations from "./ru";

const getTranslation = (selector, db) => {
  const slicer = selector.indexOf(':');
  const start = selector.substring(0, slicer);
  const end = selector.substring(slicer + 1).split('.');
  let item = null;
  const translations = db.find((fileName) => fileName[start] !== undefined)[start];
  while (end.length) {
    const shifted = end.shift();
    item = translations[shifted];
  }
  return item;
};

export const translate = (selector, language) => {
  switch (language) {
    case 'arm':
      return getTranslation(selector, armTranslations);
    case 'en':
      return getTranslation(selector, enTranslations);
    case 'ru':
      return getTranslation(selector, ruTranslations);
    default:
      return 'Not Found';
  }
};
