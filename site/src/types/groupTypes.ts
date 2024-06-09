// import { IFileResponse } from './pdfTypes';
import { PortableTextBlock } from '@portabletext/types';
import { IPortableImgGallery } from './newsTypes';
import { Routes } from './routes.d';
import { ProfessorType } from './annualSummerSchoolTypes';
import { IImageReference, TextBlockType } from './commonTypes';
import { EDebut, ETabs } from './translation';

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
  isActiveArtists: boolean;
  isActiveWinners: boolean;
  isActiveVenues: boolean;
  isActiveGuests: boolean;
  isActiveBooklet: boolean;
  conditions: TextBlockType[] | null;
  requirements: PortableTextBlock[] | null;
  timetable: PortableTextBlock[] | null;
  venues: TextBlockType[] | null;
  prizes: PortableTextBlock[] | null;
  rewards: RewardType[] | null;
  artists: TextBlockType[] | null;
  juries: JuryType[] | null;
  guests: GuestType[] | null;
  booklet: string | null;
}

export interface RewardType {
  id: string;
  title: string;
  description: string;
  img?: IImageReference;
}

export interface JuryType {
  name: string;
  role?: string;
  about: string;
  photo: IImageReference;
  slug: string;
}

export interface ParticipantType {
  name: string;
  age: number;
  country?: string;
  biography: string;
  avatar: IImageReference;
  id: string;
  slug: string;
}

export interface JuniorParticipantType extends ParticipantType {
  group: EDebut | ETabs;
}

export interface GuestType {
  name: string;
  about: string;
  photo: IImageReference;
  id: string;
}

export type JuniorWinnerType = WinnerType & {
  group: string;
};

export type WinnerType = {
  _key: string;
  champion: string;
  participantKey: string;
};

export interface OtherGroupType extends CommonGroupType {
  group: OtherGroupClassType | null;
  isActivePreselectionJury: boolean;
  winners: WinnerType[] | null;
  winnersGallery: IPortableImgGallery | null;
  preselectionJury: ProfessorType[] | null;
  participants: ParticipantType[] | null;
}

export interface JuniorGroupType extends CommonGroupType {
  group: 'junior';
  isActiveStudentsJury: boolean;
  studentsJury: ParticipantType[] | null;
  studentJuryDesc: string;
  participants: JuniorParticipantType[] | null;

  winners: JuniorWinnerType[] | null;
  juniorGallery:
    | {
        subgroup: string;
        gallery: IPortableImgGallery;
      }[]
    | null;
}

export interface GroupProps {
  title: string;
}
