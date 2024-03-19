import { IColorField } from '@/types/commonTypes';

export const createColor = (color: IColorField | undefined) => {
  if (!color) {
    return 'transparent';
  }
  const {
    rgb: { a, b, g, r },
  } = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
