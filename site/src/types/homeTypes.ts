import { IVideo, IImage } from './commonTypes';
import { INews } from './newsTypes';
import { GradientBackground, ColorBackground } from './bannerType';

export interface CardType {
  background: GradientBackground | ColorBackground;
  img: IImage;
}

export interface HomeData {
  news: INews[];
  videos: IVideo[];
  banner: CardType | null;
}
