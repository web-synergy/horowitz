import { ParticipantType } from './groupTypes';
import { PortableTextBlock } from '@portabletext/types';
import { IImage, IImageReference } from './commonTypes';
import { BannerType } from './bannerType';

import { TextBlockImageType } from './commonTypes';

export interface IParticipant {
  _key: string;
  about: PortableTextBlock[];
  avatar: TextBlockImageType;
  age: number;
  country: string;
  name: string;
}

export interface ProfessorType {
  _key: string;
  name: string;
  about: string;
  photo: IImageReference;
  instrument?: string;
  slug: string;
  role: string;
}

export interface IRehearsal {
  time: string;
  event: string;
  _key: string;
}

export interface ISchedule {
  _key: string;
  lecture: string;
  date: string;
  rehearsals: IRehearsal[];
}

export type MainAnnualSummerSchoolTypes = Pick<
  AnnualSummerSchoolTypes,
  'button' | 'year' | 'slug' | 'isActive' | 'applicationLink'
>;

export interface IConcerts {
  _key: string;
  title: string;
  img: IImage;
  concertPrograms: string;
}
export type AnnualSummerSchoolTypes = {
  year: string;
  slug: string;
  button: string;
  isActive: boolean;
  isCommonDataFetched: boolean;
  applicationLink: string | null;
  banner: BannerType | null;

  description: string | null;

  isActiveConditions: boolean;
  isActiveParticipants: boolean;
  isActiveProfessors: boolean;
  isActiveSchedule: boolean;
  isActiveConcerts: boolean;
  isActiveOrchestra: boolean;

  conditions: PortableTextBlock[] | null;
  participants: ParticipantType[] | null;
  professors: ProfessorType[] | null;
  schedules: ISchedule[] | null;
  concerts: IConcerts[] | null;
  orchestra: PortableTextBlock[] | null;
};
