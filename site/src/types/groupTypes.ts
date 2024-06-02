// import { IFileResponse } from './pdfTypes';
import { PortableTextBlock } from '@portabletext/types';
import { IPortableImgGallery } from './newsTypes';
import { Routes } from './routes.d';

import {
  IImageReference,
  TextBlockType,
  TextBlockImageType,
} from './commonTypes';

export type OtherGroupClassType = Routes.INTERMEDIATE | Routes.SENIOR;
export interface GroupPageProps {
  group: OtherGroupClassType;
}

export type GroupType = JuniorGroupType | OtherGroupType;

export interface CommonGroupType {
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
  rewards: PortableTextBlock[] | null;
  artists: ArtistType[] | null;
  juries: JuryType[] | null;
  guests: GuestType[] | null;
  booklet: string | null;
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
  about: string;
  avatar: TextBlockImageType;
  slug: string;
}

export interface ParticipantType {
  name: string;
  age: number;
  country?: string;
  biography: string;
  avatar: IImageReference;
  _key: string;
  slug: string;
}

export interface GuestType {
  name: string;
  about: PortableTextBlock[];
  avatar: TextBlockImageType;
  id: string;
}

export type WinnerType = {
  _key: string;
  champion: string;
  img: IImageReference;
  name: string;
};

export interface OtherGroupType extends CommonGroupType {
  group: 'intermediate' | 'senior' | null;
  isActivePreselectionJury: boolean;
  winners: WinnerType[] | null;
  winnersGallery: IPortableImgGallery | null;
  preselectionJury: JuryType[] | null;
}

export interface JuniorGroupType extends CommonGroupType {
  group: 'junior';
  isActiveStudentsJury: boolean;
  studentsJury: ParticipantType[] | null;
  studentJuryDesc: string;
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
  galleries: {
    groupA: IPortableImgGallery;
    groupB: IPortableImgGallery;
    groupC: IPortableImgGallery;
    groupD: IPortableImgGallery;
    junior: IPortableImgGallery;
  } | null;
}

export interface GroupProps {
  title: string;
}
