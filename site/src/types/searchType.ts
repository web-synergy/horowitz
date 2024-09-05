export type SearchType = {
  page: string;
  path: string;
  title: string;
  text: string;
  date: string;
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

export type ObjectResponseType = {
  description: string;
  title: string;
  slug: string;
};

export type MasterClassSearchType = ObjectResponseType & {
  date: string;
};

export type MasterClassSearchResponse = MasterClassSearchType[];

export type SummerSchoolMain = {
  topText: TextResponse;
  bottomText: TextResponse;
};

export type AnnualSummerSchoolSearchType = {
  slug: string;
  date: string;
  year: string;
  concerts: ObjectResponseType[] | null;
  artists: TextResponse;
  conditions: TextResponse;
  description: TextResponse;
  participants: ObjectResponseType[] | null;
  professors: ObjectResponseType[] | null;
};

export type CompetitionSearchType = {
  slug: string;
  date: string;
  title: string;
  description: string | null;
  junior: {
    juniorDate: string;
    juniorConditions: TextResponse[];
    juniorTimetable: TextResponse;
    juniorRequirements: TextResponse;
    juniorJuries: ObjectResponseType[] | null;
    juniorArtists: ObjectResponseType[] | null;
    juniorGuests: ObjectResponseType[] | null;
    juniorParticipants: ObjectResponseType[] | null;
    juniorPreJury: ObjectResponseType[] | null;
  };
};
