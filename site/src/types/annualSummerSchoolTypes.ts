import { PortableTextBlock } from "@portabletext/types";
import { IImage } from "./commonTypes";

export interface IAvatar {
  aspectRatio: string;
  image: IImage;
  alt?: string;
}

export interface IParticipant {
  _key: string;
  about: PortableTextBlock[];
  avatar: IAvatar;
  birthday: string;
  country: string;
  name: string;
}

export interface IProfessor {
  _key: string;
  about: PortableTextBlock[];
  avatar: IAvatar;
  instrument: string;
  name: string;
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
  "button" | "year" | "slug" | "isActive" | "applicationLink"
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

  description: PortableTextBlock[];

  isActiveConditions: boolean;
  isActiveParticipants: boolean;
  isActiveProfessors: boolean;
  isActiveSchedule: boolean;
  isActiveConcerts: boolean;
  isActiveOrchestra: boolean;

  conditions: PortableTextBlock[] | null;
  participants: IParticipant[] | null;
  professors: IProfessor[] | null;
  schedules: ISchedule[] | null;
  concerts: IConcerts[] | null;
  orchestra: PortableTextBlock[] | null;
};
