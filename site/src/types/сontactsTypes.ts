export interface SettingsResp {
  contacts: ContactsType;
  logo: string;
  sociable: SociableType;
}

export interface ContactsType {
  address: string;
  phone: string;
  email: string;
  pressCenter: {
    phone: string;
    email: string;
  };
  about: [];
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
