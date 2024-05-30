import { IImage } from './commonTypes';

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
  overlayColor: string;
  overlayOpacity: string;
}

export interface GradientColorType {
  color: string;
  alphaChannel: string;
  position: number;
}
interface GradientOverlay {
  overlayType: 'gradient';
  overlayGradient: {
    degree: number;
    colors: GradientColorType[];
  };
}

interface NoEffectOverlay {
  overlayType: 'none';
}

export interface GradientBackground {
  backgroundType: 'gradient';
  backgroundGradient: {
    degree: number;
    colors: GradientColorType[];
  };
}

export interface ColorBackground {
  backgroundType: 'monochrome';
  backgroundColor: string;
}

interface NoBackground {
  backgroundType: 'none';
}
