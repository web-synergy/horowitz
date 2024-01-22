export interface SettingsResp {
  contacts: ContactsType
  logo: string
  sociable: SociableType
  competitions: CompetitionsMenu[]
}

export interface ContactsType {
  address: string
  about: never[]
  email: string
  phone: string
  pressCenter: {
    phone: string
    email: string
  }
}

export interface CompetitionsMenu {
  title: string
  slug: string
}
export interface SociableType {
  instagram: string
  facebook: string
  youTube: string
}

export interface ContactsDetailsProps {
  location?: string
  phone?: string
  email?: string
  pressCenterPhone?: string
  pressCenterEmail?: string
}
