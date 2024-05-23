import { PortableTextBlock } from "@portabletext/types";
import { IImage } from "./commonTypes";

export interface IMasterClass {
  _id: string;
  _createdAt: string;
  title: string;
  img: IImage;
  slug: string;
  description: PortableTextBlock[];
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
