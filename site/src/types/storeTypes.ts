import { PortableTextBlock } from '@portabletext/types';
import { INews } from './newsTypes';

import { ContactsType, SettingsResp, SociableType } from './contactsTypes';
import { Partner } from './partnersTypes';
import { Member } from './administrationTypes';
import { NavigationType } from './routes';
import { IVirtuosos } from './virtuososTypes';

export interface SettingsStoreState {
  sociable: SociableType | null;
  logo: string | null;
  contacts: { [key: string]: ContactsType | null };
  competitions: { [key: string]: NavigationType[] | null };
  fetchSettings: (language: string) => Promise<void>;
  getPreviewSettings: (settings: SettingsResp[], language: string) => void;
}

export interface HorowitzStoreState {
  bannerData: {
    bannerCopyright: string;
    bannerImg: string;
  };
  quote: { author: string[]; quote: string[] };
  upperTextBlock: PortableTextBlock[];
  lowerTextBlock: PortableTextBlock[];
  literature: PortableTextBlock[];
  isLoading: boolean;
  fetchHorowitzData: (language: string) => Promise<void>;
}

export interface NewsStoreState {
  newsList: INews[];
  loading: boolean;
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
  requestLang: string | null;

  fetchPartners: (language: string) => Promise<void>;
}

export interface AdministrationStoreState {
  administrationData: { members: Member[] } | null;
  isLoading: boolean;
  fetchAdministrationData: (language: string) => Promise<void>;
}

export interface VirtuososStoreState {
  articleList: INews[];
  loading: boolean;
  pageQty: number;
  virtuosos: { [key: string]: IVirtuosos | null };
  fetchVirtuosos: (language: string) => Promise<void>;
  fetchVirtuososArticles: (language: string, page: number) => Promise<void>;
}
