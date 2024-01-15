import { SociableType, ContactsType } from './сontactsTypes';

export interface SettingsStoreState {
  sociable: SociableType | null;
  logo: string | null;
  contacts: { [key: string]: ContactsType | null };
  fetchSettings: (language: string) => Promise<void>;
}
