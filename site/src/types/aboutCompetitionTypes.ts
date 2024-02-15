import { PortableTextBlock } from "@portabletext/types";

export interface AboutCompetitionImage {
  asset: {
    _ref: string;
  };
  _key: string;
  alt: string;
}

export interface AboutCompetitionResp {
  upperTextBlock: PortableTextBlock[];
  middleTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  imgHistoryOne: AboutCompetitionImage;
  imgHistoryTwo: AboutCompetitionImage;
  imgStatistics: AboutCompetitionImage;
}
