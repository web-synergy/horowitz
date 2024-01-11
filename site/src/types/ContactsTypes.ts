interface AboutText {
  text: string
}
interface AboutChildren {
  children: AboutText[]
}
interface AboutSettings extends Array<AboutChildren> {}

interface SettingsResp {
  contacts: {
    address: string
    phone: string
    email: string
    pressCenter: {
      phone: string
      email: string
    }
    about: AboutSettings[]
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

export default SettingsResp
