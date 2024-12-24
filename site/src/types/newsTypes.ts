import { PortableTextBlock } from '@portabletext/types';
import { IImage } from './commonTypes';

export interface INews {
  _id: string;
  _createdAt: string;
  title: string;
  date: string;
  img: IImage;
  banner: IImage;
  slug: string;
  description: PortableTextBlock[];
  shortDescription: string;
  count: number;
}

interface IIGallery extends IImage {
  photoLayout: {
    cols: number;
    rows: number;
  };
  title: string;
}
export interface IPortableImgGallery {
  images: IIGallery[];
  quantity: number;
  title: string;
  option: boolean;
}
