import { SociableType, ContactsType, CompetitionsMenu } from './сontactsTypes';

export interface SettingsStoreState {
  sociable: SociableType | null;
  logo: string | null;
  contacts: { [key: string]: ContactsType | null };
  competitions: { [key: string]: CompetitionsMenu[] | null };
  fetchSettings: (language: string) => Promise<void>;
}
