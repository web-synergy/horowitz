import { ColorField } from '@/types/bannerType';

export const createColor = (color: ColorField | undefined) => {
  if (!color) {
    return 'transparent';
  }
  const {
    rgb: { a, b, g, r },
  } = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
