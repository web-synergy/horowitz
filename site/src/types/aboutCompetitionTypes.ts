import { PortableTextBlock } from '@portabletext/types';
import { IImage } from './commonTypes';
import { BannerType } from './bannerType';

export interface AboutCompetitionType {
  mainBanner: BannerType | null;
  blocks: {
    textBlock: PortableTextBlock[];
    imageBlock: IImage;
  }[];

  additionalText: PortableTextBlock[];
}
