import { IImage } from './commonTypes';
import { IColorField } from './commonTypes';

export interface IBanner {
  img: IImage;
  copyright?: string;
  size: NotFullSizeType | FullSizeType;
  overlay: ColorOverlay | GradientOverlay | NoEffectOverlay;
  background: GradientBackground | ColorBackground | NoBackground;
}

interface FullSizeType {
  fullSize: true;
  maxHeight: number;
}

interface NotFullSizeType {
  fullSize: false;
  location: {
    position: 'center' | 'left' | 'right';
  };
}

interface ColorOverlay {
  overlayType: 'monochrome';
  overlayColor: IColorField;
}

interface GradientOverlay {
  overlayType: 'gradient';
  linearGradient: {
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
