import { PortableTextBlock } from "@portabletext/types";

export interface IHorowitzData {
  bannerData: {
    bannerCopyright: string;
    bannerImg: string;
  };
  quote: {
    author: string[];
    quote: string[];
  };
  upperTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  literature: PortableTextBlock[];
}

export interface BannerComponentProps {
  imgSrc: string;
  copyright: string;
}

export interface LiteratureSectionProps {
  literature: PortableTextBlock[];
  visibleItems: number;
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
