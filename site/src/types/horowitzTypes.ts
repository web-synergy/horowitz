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
  upperBlockText: PortableTextBlock[];
  lowerBlockText: PortableTextBlock[];
  literature: PortableTextBlock[];
}
