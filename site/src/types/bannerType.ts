import { IImage } from './commonTypes';
import { IColorField } from './commonTypes';

export type IBanner =
  | BannerWithOverlay
  | BannerWithGradient
  | BannerWithoutEffects;

interface CommonProperty {
  img: IImage;
  copyright?: string;
  fullSize: boolean;
  location?: {
    position: 'center' | 'left' | 'right';
  };
  maxHeight: number;
  background: IColorField;
}

interface BannerWithOverlay extends CommonProperty {
  overlayType: 'monochrome';
  overlayColor: IColorField;
}

interface BannerWithGradient extends CommonProperty {
  overlayType: 'gradient';
  linearGradient?: {
    degree: number;
    colors: { value: IColorField; position: number }[];
  };
}

interface BannerWithoutEffects extends CommonProperty {
  overlayType: 'none';
}
