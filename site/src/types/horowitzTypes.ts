import { PortableTextBlock } from "@portabletext/types";
import { IBanner } from "./bannerType";

export interface IHorowitzData {
  banner: IBanner | null;
  bannerData: IBanner | null;
  bannerCopyright: string;
  quote: {
    author: string[];
    quote: string[];
  };
  upperTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  literature: PortableTextBlock[];
}

export interface BannerComponentProps {
  banner: IBanner;
  copyright: string;
}

export interface LiteratureSectionProps {
  literature: PortableTextBlock[];
  isAllLiteratureVisible: boolean;
}

export interface QuoteSectionProps {
  quote: {
    author: string[];
    quote: string[];
  };
}

export interface TextBlockSectionProps {
  blocks: PortableTextBlock[];
}
