// import { IFileResponse } from './pdfTypes';
import { PortableTextBlock } from '@portabletext/types';
import { IPortableImgGallery } from './newsTypes';

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
  isActiveGuests: boolean;
  isActiveBooklet: boolean;
  conditions: TextBlockType[] | null;
  requirements: PortableTextBlock[] | null;
  timetable: PortableTextBlock[] | null;
  venues: TextBlockType[] | null;
  prizes: PortableTextBlock[] | null;
  rewards: RewardsType[] | null;
  artists: ArtistType[] | null;
  jury: JuryType[] | null;
  guests: GuestType[] | null;
  booklet: string | null;
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

export interface StudentsJuryType {
  name: string;
  country: string;
  age: number;
  about: PortableTextBlock[];
  avatar: TextBlockImageType;
  _key: string;
}

export interface GuestType {
  name: string;
  about: PortableTextBlock[];
  avatar: TextBlockImageType;
  id: string;
}

export interface ParticipantType {
  id: string;
  name: string;
  age: number;
  avatar: TextBlockImageType;
  biography: PortableTextBlock[];
  group: string;
  slug: string;
}

export type WinnerType = {
  _key: string;
  champion: string;
  img: IImageReference;
  name: string;
};

export interface OtherGroupType extends CommonGroupType {
  isActivePreselectionJury: boolean;
}

export interface JuniorGroupType extends CommonGroupType {
  isActiveStudentsJury: boolean;
  studentsJury: StudentsJuryType[] | null;
  debut: {
    groupA: ParticipantType[];
    groupB: ParticipantType[];
    groupC: ParticipantType[];
    groupD: ParticipantType[];
  } | null;
  junior: ParticipantType[] | null;
  winners: {
    groupA: WinnerType[];
    groupB: WinnerType[];
    groupC: WinnerType[];
    groupD: WinnerType[];
    junior: WinnerType[];
  } | null;
  winnersGallery: IPortableImgGallery | null;
}

export interface GroupProps {
  title: string;
}
