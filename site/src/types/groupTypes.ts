import { PortableTextBlock } from '@portabletext/types';
import {
  IImageReference,
  TextBlockType,
  TextBlockImageType,
} from './commonTypes';
interface CommonGroupType {
  isActiveConditions: boolean;
  isActiveJury: boolean;
  isActiveTimetable: boolean;
  isActiveRequirements: boolean;
  isActiveParticipants: boolean;
  isActiveRewards: boolean;
  isActiveOrchestra: boolean;
  isActiveWinners: boolean;
  isActiveVenues: boolean;
  isActiveGuest: boolean;
  isActiveBooklet: boolean;
  conditions: TextBlockType[] | null;
  requirements: PortableTextBlock[] | null;
  timetable: PortableTextBlock[] | null;
  venues: TextBlockType[] | null;
  prizes: PortableTextBlock[] | null;
  rewards: RewardsType[] | null;
  artists: ArtistType[] | null;
  jury: JuryType[] | null;
}

export interface RewardsType {
  image: IImageReference;
  title: string;
  description: string;
}

export interface ArtistType {
  image: IImageReference;
  copyRight?: string;
  title: string;
  description: PortableTextBlock[];
}

export interface JuryType {
  name: string;
  role?: string;
  about: PortableTextBlock[];
  avatar: TextBlockImageType;
  slug: string;
}
export interface OtherGroupType extends CommonGroupType {
  isActivePreselectionJury: boolean;
}

export interface JuniorGroupType extends CommonGroupType {
  isActiveStudentsJury: boolean;
}

export interface GroupProps {
  title: string;
}
