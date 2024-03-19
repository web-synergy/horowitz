import { IVideo, IColorField, IImage } from './commonTypes';
import { INews } from './newsTypes';


export interface bannerType {
  background: IColorField;
  img: IImage;
}
export interface HomeData {
  news: INews[];
  videos: IVideo[];
  banner: bannerType;
}

