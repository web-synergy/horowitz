import { PortableTextBlock } from '@portabletext/types';

export interface INews {
  _id: string;
  _createdAt: string;
  title: string;
  img: IImage;
  slug: string;
  description: PortableTextBlock[];
  shortDescription: string;
  date: string;
}

export interface IImage {
  alt: string;
  asset: {
    _ref: string;
  };
  _key: string;
}
interface IIGallery extends IImage {
  photoLayout: {
    cols: number;
    rows: number;
  };
  title: string;
}
export interface IPortableImgGallery {
  value: {
    images: IIGallery[];
    title: string;
    option: boolean;
  };
}
