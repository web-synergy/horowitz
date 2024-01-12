export interface SettingsResp {
  contacts: {
    address: string
    phone: string
    email: string
    pressCenter: {
      phone: string
      email: string
    }
    about: []
  }
  logo: string
  sociable: {
    instagram: string
    _updatedAt: string
    _createdAt: string
    facebook: string
    youTube: string
    _rev: string
    _type: string
    _id: string
  }
}

export interface ContactsDetailsProps {
  location?: string
  phone?: string
  email?: string
  pressCenterPhone?: string
  pressCenterEmail?: string
}
