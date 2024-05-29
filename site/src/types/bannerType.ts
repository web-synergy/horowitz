import { IImage } from './commonTypes';
import { IColorField } from './commonTypes';

export type BannerType = CommonBannerProps &
  BannerSizeType &
  OverlayType &
  BackgroundType;

type CommonBannerProps = {
  img: IImage;
  authorRight?: string;
};

type BannerSizeType = NotFullSizeType | FullSizeType;
type OverlayType = ColorOverlay | GradientOverlay | NoEffectOverlay;
type BackgroundType = GradientBackground | ColorBackground | NoBackground;

interface FullSizeType {
  fullSize: true;
  maxHeight: number;
}

interface NotFullSizeType {
  fullSize: false;
  position: 'center' | 'left' | 'right';
}

interface ColorOverlay {
  overlayType: 'monochrome';
  overlayColor: IColorField;
}

interface GradientOverlay {
  overlayType: 'gradient';
  overlayGradient: {
    degree: number;
    colors: { value: IColorField; position: number }[];
  };
}

interface NoEffectOverlay {
  overlayType: 'none';
}

export interface GradientBackground {
  backgroundType: 'gradient';
  backgroundGradient: {
    degree: number;
    colors: { value: IColorField; position: number }[];
  };
}

export interface ColorBackground {
  backgroundType: 'monochrome';
  backgroundColor: IColorField;
}

interface NoBackground {
  backgroundType: 'none';
}
