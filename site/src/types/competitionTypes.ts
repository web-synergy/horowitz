import { IImageReference } from './commonTypes';
import { BannerType } from './bannerType';

interface PartialGroupType {
  isActive: boolean;
  _id: string;
}
export interface CompetitionType {
  title: string;
  slug: string;
  description: string | null;
  isStubActive: boolean;
  stubText: string;
  juniorBtn: IImageReference | null;
  intermediateBtn: IImageReference | null;
  seniorBtn: IImageReference | null;
  mainBanner: BannerType | null;
  junior: PartialGroupType;
  intermediate: PartialGroupType;
  senior: PartialGroupType;
}
