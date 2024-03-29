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
  format: {
    width: number;
    height: number;
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

interface GradientBackground {
  backgroundType: 'gradient';
  backgroundGradient: {
    degree: number;
    colors: { value: IColorField; position: number }[];
  };
}

interface ColorBackground {
  backgroundType: 'monochrome';
  backgroundColor: IColorField;
}

interface NoBackground {
  backgroundType: 'none';
}
