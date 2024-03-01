import { PortableTextBlock } from '@portabletext/types';

export interface INews {
  _id: string;
  _createdAt: string;
  title: string;
  img: IImage;
  slug: string;
  description: PortableTextBlock[];
  shortDescription: string;
  count: number;
}

export interface IImage {
  alt: string;
  aspectRatio: number;
  width: number;
  isEmbed: boolean;
  position: string;
  embedPosition: string;

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
  quantity: number;
  title: string;
  option: boolean;
}
