import { PortableTextBlock } from '@portabletext/types';
import { IImage, IPortableImgGallery } from './newsTypes';
type TArticle = {
  img: IImage;
  title: string;
  slug: string;
};

export interface IVirtuosos {
  banner: IImage;
  description: PortableTextBlock[];
  gallery: IPortableImgGallery;
  article: TArticle[];
}
