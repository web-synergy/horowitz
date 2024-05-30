import { GradientColorType } from './../types/bannerType';

export const createColor = (color: string | undefined, alpha: string = '1') => {
  if (!color) {
    return 'transparent';
  }

  let r: number;
  let g: number;
  let b: number;
  if (color.length === 4) {
    r = parseInt(color.slice(1, 2), 16);
    g = parseInt(color.slice(2, 3), 16);
    b = parseInt(color.slice(3), 16);
  } else {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5), 16);
  }

  // const r = parseInt(color.slice(1, 3), 16);
  // const g = parseInt(color.slice(3, 5), 16);
  // const b = parseInt(color.slice(5), 16);

  return `rgb(${r}, ${g}, ${b}, ${alpha})`;
};

export const createGradientColors = (
  colors: GradientColorType[] | undefined
) => {
  if (!colors) {
    return 'transparent';
  }

  return colors
    .map(
      ({ color, alphaChannel, position }) =>
        `${`${createColor(color, alphaChannel)}`} ${position}%`
    )
    .join(', ');
};
