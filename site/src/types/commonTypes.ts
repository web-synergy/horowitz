import { SanityReference } from '@sanity/client';

export interface IImageReference {
  asset: SanityReference;
  _key: string;
}

export interface IImage extends IImageReference {
  alt: string;
  aspectRatio: number;
  width: number;
  isEmbed: boolean;
  position: string;
  embedPosition: string;
}

export type IVideo = {
  link: string;
  title: string;
  _key: string;
  _type: string;
};

export interface IColorField {
  rgb: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
}

export interface TextBlockImageType {
  image: IImageReference;
  alt?: string;
  //ToDo: remove aspect ration from image
  aspectRatio: '16/9' | '1/1' | '3/4';
}
export interface TextBlockType {
  title: string;
  text: string;
  image: TextBlockImageType;
}
