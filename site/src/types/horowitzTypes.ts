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
