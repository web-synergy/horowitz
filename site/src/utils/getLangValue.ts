export const getLangValue = (
  lang: string,
  value: { ua: string; en: string }
) => {
  return lang === 'ua' ? value.ua : value.en;
};
