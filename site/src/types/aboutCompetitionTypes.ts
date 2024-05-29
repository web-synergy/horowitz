import { PortableTextBlock } from '@portabletext/types';
import { IImage } from './commonTypes';
import { BannerType } from './bannerType';

export interface AboutCompetitionType {
  mainBanner: BannerType | null;
  upperTextBlock: PortableTextBlock[];
  middleTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  imgHistoryOne: IImage | null;
  imgHistoryTwo: IImage | null;
  imgStatistics: IImage | null;
  additionalText: PortableTextBlock[];
}
