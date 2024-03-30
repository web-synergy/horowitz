import { IVideo, IImage } from './commonTypes';
import { INews } from './newsTypes';
import { GradientBackground, ColorBackground } from './bannerType';

export interface CardType {
  background: GradientBackground | ColorBackground;
  img: IImage;
  format: {
    width: number;
    height: number;
  };
}

export interface HomeData {
  news: INews[];
  videos: IVideo[];
  banner: CardType | null;
}
