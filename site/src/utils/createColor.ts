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

export const createGradientColors = (
  colors: { value: IColorField; position: number }[] | undefined
) => {
  if (!colors) {
    return 'transparent';
  }

  return colors
    .map(({ value, position }) => `${createColor(value)} ${position}%`)
    .join(', ');
};
