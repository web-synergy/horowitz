import { PortableTextBlock } from '@portabletext/types';
import { IImage } from './commonTypes';
import { IPortableImgGallery } from './newsTypes';
import { IBanner } from './bannerType';

type TArticle = {
  img: IImage;
  title: string;
  slug: string;
};

export interface IVirtuosos {
  banner: IBanner;
  description: PortableTextBlock[];
  gallery: IPortableImgGallery;
  article: TArticle[];
}
