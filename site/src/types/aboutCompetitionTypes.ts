import { PortableTextBlock } from '@portabletext/types';
import { IImage } from './commonTypes';
import { IBanner } from './bannerType';

export interface AboutCompetitionResp {
  mainBanner: IBanner;
  upperTextBlock: PortableTextBlock[];
  middleTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  imgHistoryOne: IImage;
  imgHistoryTwo: IImage;
  imgStatistics: IImage;
  additionalText: PortableTextBlock[];
}
