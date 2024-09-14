import { GradientColorType } from './../types/bannerType';

export const createColor = (color: string | undefined, alphaChannel = '1') => {
  if (!color) {
    return 'transparent';
  }

  let r: number;
  let g: number;
  let b: number;
  let alpha = alphaChannel;
  if (color.length <= 4) {
    r = parseInt(color.slice(1, 2), 16);
    g = parseInt(color.slice(2, 3), 16);
    b = parseInt(color.slice(3), 16);
  } else if (color.length > 4 && color.length <= 7) {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 6), 16);
  } else {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 6), 16);
    alpha = parseInt(color.slice(6), 16).toString();
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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
