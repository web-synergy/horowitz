import { PortableTextBlock } from '@portabletext/types';
import { IImage } from './commonTypes';
import { IBanner } from './bannerType';

export interface AboutCompetitionType {
  mainBanner: IBanner | null;
  upperTextBlock: PortableTextBlock[];
  middleTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  imgHistoryOne: IImage | null;
  imgHistoryTwo: IImage | null;
  imgStatistics: IImage | null;
  additionalText: PortableTextBlock[];
}
