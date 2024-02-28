import { PortableTextBlock } from '@portabletext/types';
import { INews } from './newsTypes';

import { ContactsType, SettingsResp, SociableType } from './contactsTypes';
import { Partner } from './partnersTypes';
import { AboutCompetitionImage } from './aboutCompetitionTypes';
import { IAdministration } from './administrationTypes';
import { NavigationType } from './routes';
import { IUkrWorks } from './ukranianWorks';
import { IVirtuosos } from './virtuososTypes';
import { IBanner } from './bannerType';

export interface SettingsStoreState {
  requestLang: string;
  sociable: SociableType | null;
  logo: string | null;
  contacts: ContactsType | null;
  competitions: NavigationType[] | null;
  fetchSettings: (language: string) => Promise<void>;
  getPreviewSettings: (settings: SettingsResp[], language: string) => void;
}

export interface AboutCompetitionState {
  mainBanner: IBanner | null;
  upperTextBlock: PortableTextBlock[];
  middleTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  imgHistoryOne: AboutCompetitionImage | null;
  imgHistoryTwo: AboutCompetitionImage | null;
  imgStatistics: AboutCompetitionImage | null;
  isLoading: boolean;
  requestLang: string;

  fetchAboutCompetitionData: (language: string) => Promise<void>;
}

export interface HorowitzStoreState {
  bannerData: IBanner | null;
  bannerCopyright: string;
  quote: { author: string[]; quote: string[] };
  upperTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  literature: PortableTextBlock[];
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

export interface PartnersStoreState {
  organizers: Partner[] | null;
  mainPartners: Partner[] | null;
  sponsors: Partner[] | null;
  generalInfoPartners: Partner[] | null;
  mainInfoPartners: Partner[] | null;
  officialInfoPartners: Partner[] | null;
  partners: Partner[] | null;
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
  works: IUkrWorks | null;
  fetchWorks: (language: string) => Promise<void>;
}

export interface HomeStoreState {
  requestLang: string;
  loading: boolean;
  error: string;
  news: INews[];
  fetchHome: (language: string) => Promise<void>;
}
