import { INews } from './newsTypes';
import { AboutCompetitionType } from './aboutCompetitionTypes';
import { IAdministration } from './administrationTypes';
import { PartnersType } from './partnersTypes';
import { IHorowitzData } from './horowitzTypes';
import { ContactsType, SettingsResp, SociableType } from './contactsTypes';
import { NavigationType } from './routes';
import { IUkrWorks } from './ukranianWorks';
import { IVirtuosos } from './virtuososTypes';
import { HomeData } from './homeTypes';
import { AnnualSummerSchoolTypes, IConcerts } from './annualSummerSchoolTypes';
import { CompetitionType } from './competitionTypes';
import {
  JuniorGroupType,
  OtherGroupType,
  OtherGroupClassType,
} from './groupTypes';
import { Routes } from './routes';
import { IMasterClass } from './masterClassTypes';

export interface SettingsStoreState {
  requestLang: string;
  sociable: SociableType | null;
  logo: string | null;
  contacts: ContactsType | null;
  competitions: NavigationType[] | null;
  fetchSettings: (language: string) => Promise<void>;
  getPreviewSettings: (settings: SettingsResp, language: string) => void;
}

export interface AboutCompetitionState extends AboutCompetitionType {
  isLoading: boolean;
  requestLang: string;
  fetchAboutCompetitionData: (language: string) => Promise<void>;
}

export interface HorowitzStoreState extends IHorowitzData {
  isLoading: boolean;
  requestLang: string;
  fetchHorowitzData: (language: string) => Promise<void>;
}

export interface NewsStoreState {
  newsList: INews[];
  currentPage: number;
  loading: boolean;
  requestLang: string;
  error: string | unknown;
  pageQty: number;
  fetchNews: (language: string, page: number) => Promise<void>;
}

export interface PartnersStoreState extends PartnersType {
  requestLang: string;
  fetchPartners: (language: string) => Promise<void>;
}

export interface AdministrationStoreState {
  requestLang: string;
  administrationData: IAdministration | null;
  isLoading: boolean;
  fetchAdministrationData: (language: string) => Promise<void>;
}

export interface VirtuososStoreState {
  articleList: INews[];
  loading: boolean;
  currentPage: number;
  pageQty: number;
  requestLang: string;

  virtuosos: IVirtuosos | null;
  fetchVirtuosos: (language: string) => Promise<void>;
  fetchVirtuososArticles: (language: string, page: number) => Promise<void>;
}
export interface UkrWorksStoreState {
  requestLang: string;
  isLoading: boolean;
  works: IUkrWorks | null;
  fetchWorks: (language: string) => Promise<void>;
}

export interface HomeStoreState extends HomeData {
  requestLang: string;
  loading: boolean;
  error: string;

  fetchHome: (language: string) => Promise<void>;
}

export interface AnnualSummerSchoolStoreState extends AnnualSummerSchoolTypes {
  requestLang: string;
  isLoading: boolean;
  currentConcert: IConcerts | null;
  getCurrentConcert: (key: string) => void;
  fetchAnnualSummerSchool: (language: string, year: string) => Promise<void>;
}

export interface CompetitionStoreState extends CompetitionType {
  isLoading: boolean;
  requestLang: string;
  fetchCommonData: (language: string, slug: string) => Promise<void>;
}

export type FetchGroupData = (id: string, language: string) => Promise<void>;

export type FetchOtherGroupData = (
  id: string,
  language: string,
  group: OtherGroupClassType
) => Promise<void>;

export type GroupClassType =
  | Routes.JUNIOR
  | Routes.INTERMEDIATE
  | Routes.SENIOR;
export interface CommonGroupState {
  isLoading: boolean;
  requestLang: string;
  isCommonDataFetched: boolean;
  resetData: () => void;
}

export interface JuniorGroupState extends CommonGroupState, JuniorGroupType {
  fetchData: (
    id: string,
    language: string,
    fetchFc: (
      id: string,
      language: string
    ) => Promise<Partial<JuniorGroupType>>,
    otherState?: { [key: string]: boolean }
  ) => void;

  fetchCommonData: FetchGroupData;
  fetchConditions: FetchGroupData;
  fetchRequirements: FetchGroupData;
  fetchTimetable: FetchGroupData;
  // fetchVenues: FetchGroupData;
  fetchRewards: FetchGroupData;
  // fetchArtists: FetchGroupData;
  fetchJury: FetchGroupData;
  fetchStudentsJury: FetchGroupData;
  // fetchGuests: FetchGroupData;
  // fetchBooklet: FetchGroupData;
  // fetchParticipants: FetchGroupData;
  // fetchWinnersData: FetchGroupData;
}

export interface OtherGroupState extends CommonGroupState, OtherGroupType {
  fetchData: (
    id: string,
    language: string,
    group: GroupClassType,
    fetchFc: (
      id: string,
      language: string,
      group: GroupClassType
    ) => Promise<Partial<OtherGroupType>>,
    otherState?: { [key: string]: boolean }
  ) => void;
  fetchCommonData: FetchOtherGroupData;
  fetchConditions: FetchOtherGroupData;
  fetchJury: FetchOtherGroupData;
  fetchTimetable: FetchOtherGroupData;
  fetchRequirements: FetchOtherGroupData;
  fetchPreselectionJury: FetchOtherGroupData;
  fetchRewards: FetchOtherGroupData;
}

export interface MasterClassStoreState {
  masterClassesList: IMasterClass[];
  currentPage: number;
  loading: boolean;
  requestLang: string;
  error: string | unknown;
  pageQty: number;
  fetchMasterClasses: (language: string, page: number) => Promise<void>;
}
