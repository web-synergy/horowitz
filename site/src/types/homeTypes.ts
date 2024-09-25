import { IVideo, IImage } from './commonTypes';
import { INews } from './newsTypes';
import { GradientBackground, ColorBackground } from './bannerType';

export interface CardType {
  background: GradientBackground | ColorBackground;
  img: IImage;
}

export interface HomeWinners {
  _key: string;
  name: string;
  title: string;
  photo: string;
}
export interface HomeData {
  news: INews[];
  videos: IVideo[];
  banner: CardType | null;
  winners: {
    title: string | null;
    list: HomeWinners[] | null;
    link: string;
  };
}
