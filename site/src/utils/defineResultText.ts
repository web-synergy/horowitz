export const defineResultText = (count: number, lang: string) => {
  if (lang === 'ua') {
    if (count === 1) {
      return 'результат';
    } else if (count > 1 && count < 5) {
      return 'результати';
    } else {
      return 'результатів';
    }
  }
  if (lang === 'en') {
    if (count === 1) {
      return 'result';
    }
    return 'results';
  }

  return '';
};
