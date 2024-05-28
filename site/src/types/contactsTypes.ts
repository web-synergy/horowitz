import { NavigationType } from './routes';

export interface SettingsResp {
  contacts: ContactsType;
  logo: string;
  sociable: SociableType;
  competitions: NavigationType[];
}

export interface ContactsType {
  address: string;
  about: never[];
  email: string;
  phone: string;
  pressCenter: {
    phone: string;
    email: string;
  };
}

export interface SociableType {
  instagram: string;
  facebook: string;
  youTube: string;
}

export interface ContactsDetailsProps {
  location?: string;
  phone?: string;
  email?: string;
  pressCenterPhone?: string;
  pressCenterEmail?: string;
}
