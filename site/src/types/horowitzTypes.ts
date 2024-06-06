import { BannerType } from './bannerType';

export interface IHorowitzData {
  bannerData: BannerType | null;
  quote: QuoteType;
  upperTextBlock: string;
  lowerTextBlock: string;
  literature: string;
}

export interface LiteratureType {
  literature: string;
  isAllLiteratureVisible: boolean;
}

export interface QuoteType {
  author: string[];
  quote: string[];
}
