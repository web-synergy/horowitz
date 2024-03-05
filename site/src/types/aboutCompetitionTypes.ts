import { PortableTextBlock } from '@portabletext/types';
import { IImage } from './commonTypes';
import { IBanner } from './bannerType';

export interface AboutCompetitionImage {
  data: IImage;
  type: 'imageBlock';
}
export interface AboutCompetitionText {
  data: PortableTextBlock[];
  type: 'textBlock';
}

export interface AboutCompetitionQuote {
  type: 'quoteBlock';
  data: {
    quote: string;
    author: string;
  };
}

export type AboutCompetitionContentType =
  | AboutCompetitionImage
  | AboutCompetitionText
  | AboutCompetitionQuote;

export interface AboutCompetitionResp {
  mainBanner: IBanner;
  content: AboutCompetitionContentType[];
}
