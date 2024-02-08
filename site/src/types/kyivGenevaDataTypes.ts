export interface IOrchestraData {
  title: string;
  img: {
    src: string;
    title: string;
  };
  text: string[];
}
export type TOrchestra = { [key: string]: IOrchestraData[] };

export interface IConditionsData {
  title: string;
  text: {
    p?: string;
    list?: string[];
    h4?: string;
  }[];
}
export type TConditions = { [key: string]: IConditionsData[] };

interface ITextData {
  title: string;
  p?: string;
  p2?: string;
  list?: string[];
  h4?: string;
}
export interface IRequirements {
  [key: string]: ITextData;
}
export type TRequirements = { [key: string]: IRequirements };

export interface IRewards {
  listStrong?: { [key: string]: string }[];
  p?: string;
  list?: string[];
  h3?: string;
}
export type TRewards = { [key: string]: IRewards[] };

export interface IRegulation {
  title: string;
  rules: string[];
  date: {
    day: string;
    description: string[];
  }[];
}

export type TRegulation = { [key: string]: IRegulation[] };

interface IKGWinners {
  fullName: string;
  prizePlace: string;
  img: string;
}

export interface IKGWinnersData {
  mainImag: string;
  winners: { [key: string]: IKGWinners[] };
}
