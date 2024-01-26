import { PortableTextBlock } from "@portabletext/types";
import { INews } from "./newsTypes";

import {
  CompetitionsMenu,
  ContactsType,
  SettingsResp,
  SociableType,
} from "./contactsTypes";

export interface SettingsStoreState {
  sociable: SociableType | null;
  logo: string | null;
  contacts: { [key: string]: ContactsType | null };
  competitions: { [key: string]: CompetitionsMenu[] | null };
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
  newsList: { [key: string]: INews[] | null };
  loading: boolean;
  isLastEl: boolean;
  error: string | unknown;
  fetchNews: (language: string, page: number) => Promise<void>;
}
