import { IImage } from './newsTypes';

export type IBanner =
  | BannerWithOverlay
  | BannerWithGradient
  | BannerWithoutEffects;

export interface ColorField {
  rgb: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
}

interface CommonProperty {
  img: IImage;
  copyright?: string;
  fullSize: boolean;
  location?: {
    position: 'center' | 'left' | 'right';
  };
  maxHeight: number;
  background: ColorField;
}

interface BannerWithOverlay extends CommonProperty {
  overlayType: 'monochrome';
  overlayColor: ColorField;
}

interface BannerWithGradient extends CommonProperty {
  overlayType: 'gradient';
  linearGradient?: {
    degree: number;
    colors: { value: ColorField; position: number }[];
  };
}

interface BannerWithoutEffects extends CommonProperty {
  overlayType: 'none';
}
