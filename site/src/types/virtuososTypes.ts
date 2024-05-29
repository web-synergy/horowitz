import { IImage } from './commonTypes';
import { IPortableImgGallery } from './newsTypes';
import { BannerType } from './bannerType';

type TArticle = {
  img: IImage;
  title: string;
  slug: string;
};

export interface IVirtuosos {
  banner: BannerType;
  description: string;
  gallery: IPortableImgGallery;
  article: TArticle[];
}
