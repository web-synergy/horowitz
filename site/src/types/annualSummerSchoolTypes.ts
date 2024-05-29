import { StudentsJuryType } from './groupTypes';
import { PortableTextBlock } from '@portabletext/types';
import { IImage } from './commonTypes';
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

export interface IProfessor {
  _key: string;
  about: PortableTextBlock[];
  avatar: TextBlockImageType;
  instrument: string;
  name: string;
  role: string;
}

export interface IRehearsal {
  time: string;
  event: PortableTextBlock[];
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
  concertPrograms: PortableTextBlock[];
}
export type AnnualSummerSchoolTypes = {
  year: string;
  slug: {
    current: string;
  };
  button: string;
  isActive: boolean;
  applicationLink: string | null;
  banner: BannerType | null;

  description: PortableTextBlock[];

  isActiveConditions: boolean;
  isActiveParticipants: boolean;
  isActiveProfessors: boolean;
  isActiveSchedule: boolean;
  isActiveConcerts: boolean;
  isActiveOrchestra: boolean;

  conditions: PortableTextBlock[] | null;
  participants: StudentsJuryType[] | null;
  professors: IProfessor[] | null;
  schedules: ISchedule[] | null;
  concerts: IConcerts[] | null;
  orchestra: PortableTextBlock[] | null;
};
