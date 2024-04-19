import { PortableTextBlock } from '@portabletext/types';
import { OtherGroupType, JuniorGroupType } from './groupTypes';
import { IImageReference } from './commonTypes';
import { IBanner } from './bannerType';

export interface CompetitionType {
  title: string;
  slug: string;
  description: PortableTextBlock[] | null;
  isWarState: boolean;
  juniorBtn: IImageReference | null;
  intermediateBtn: IImageReference | null;
  seniorBtn: IImageReference | null;
  mainBanner: IBanner | null;
  junior: Pick<JuniorGroupType, 'isActive'>;
  intermediate: Pick<OtherGroupType, 'isActive'>;
  senior: Pick<OtherGroupType, 'isActive'>;
}
