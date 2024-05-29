export const transformText = (text: string) => {
  return text.split('\n').filter((item) => item !== '');
};
