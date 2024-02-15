import { PortableTextBlock } from '@portabletext/types';

export interface INews {
  _id: string;
  title: string;
  dateEnd: string;
  dateStart: string;
  img: IImage;
  slug: string;
  description: PortableTextBlock[];
  shortDescription: string;
  date: string;
  count: number;
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
  images: IIGallery[];
  title: string;
  option: boolean;
}
