import { PortableTextBlock } from '@portabletext/types';
import { BannerType } from './bannerType';

export interface IHorowitzData {
  bannerData: BannerType | null;
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
