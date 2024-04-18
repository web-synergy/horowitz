import { PortableTextBlock } from '@portabletext/types';
import { JuniorGroupType } from './juniorGroupType';
import { OtherGroupType } from './otherGroupType';

export interface CompetitionType {
  title: string;
  slug: string;
  description: PortableTextBlock[] | null;
  isWarState: boolean;
  junior: JuniorGroupType | null;
  intermediate: OtherGroupType | null;
  senior: OtherGroupType | null;
}
