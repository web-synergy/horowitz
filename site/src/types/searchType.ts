import { Routes } from './routes.d';

export type SearchType = {
  page: Routes;
  path: string;
  title: string;
  text: string;
};

export type SearchResponse = {
  administration: AdministrationSearchType;
  horowitz: HorowitzSearchType;
  about: AboutPageSearchType;
  urkWork: { text: TextResponse } | null;
  masterClass: MasterClassSearchResponse;
  news: MasterClassSearchResponse;
  virtuososMain: { text: TextResponse } | null;
  virtuosos: MasterClassSearchResponse;
  summerSchoolMain: { text: TextResponse } | null;
  summerSchools: AnnualSummerSchoolSearchType[];
  competitions: CompetitionSearchType[];
};

export type AdministrationSearchType = {
  members: {
    name: string;
    role: string;
  }[];
};

export type TextResponse = string | null | undefined;

export type HorowitzSearchType = {
  literature: TextResponse;
  lowerTextBlock: TextResponse;
  upperTextBlock: TextResponse;
};

export type AboutPageSearchType = {
  additionalText: TextResponse;
  blockTexts: TextResponse[];
};

export type MasterClassSearchType = {
  description: TextResponse;
  title: string;
  slug: string;
};

export type MasterClassSearchResponse = MasterClassSearchType[];

export type SummerSchoolMain = {
  topText: TextResponse;
  bottomText: TextResponse;
};

export type AnnualSummerSchoolSearchType = {
  slug: string;
  concerts: MasterClassSearchType[] | null;
  artists: TextResponse;
  conditions: TextResponse;
  description: TextResponse;
  participants: ParticipantSearchType[] | null;
  professors: ProfessorSearchType[] | null;
};

export type ParticipantSearchType = {
  slug: string;
  biography: string | null;
  name: string | null;
};

export type ProfessorSearchType = {
  slug: string;
  about: string | null;
  name: string | null;
};

export type CompetitionSearchType = {
  slug: string;
  title: string;
  description: string | null;
};
