import { INews } from './newsTypes';
import {
  CompetitionsMenu,
  ContactsType,
  SettingsResp,
  SociableType,
} from './сontactsTypes';

export interface SettingsStoreState {
  sociable: SociableType | null;
  logo: string | null;
  contacts: { [key: string]: ContactsType | null };
  competitions: { [key: string]: CompetitionsMenu[] | null };
  fetchSettings: (language: string) => Promise<void>;
  getPreviewSettings: (settings: SettingsResp[], language: string) => void;
}
export interface NewsStoreState {
  newsList: INews[];
  currentNews: INews | null;
  fetchNews: (language: string, start: number, end: number) => Promise<void>;
  getCurrentNews: (language: string, slug: string) => Promise<void>;
}
