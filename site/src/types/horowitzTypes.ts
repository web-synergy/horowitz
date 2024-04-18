import { PortableTextBlock } from '@portabletext/types';
import { IBanner } from './bannerType';

export interface IHorowitzData {
  bannerData: IBanner | null;
  quote: QuoteType;
  upperTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  literature: PortableTextBlock[];
}

export interface LiteratureType {
  literature: PortableTextBlock[];
  isAllLiteratureVisible: boolean;
}

export interface QuoteType {
  author: string[];
  quote: string[];
}
