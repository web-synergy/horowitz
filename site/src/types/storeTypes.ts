export interface SettingsStoreState {
  sociable: {
    facebook?: string
    instagram?: string
    youTube?: string
  }
  about: never[]
  contacts: {
    address: string
    phone: string
    email: string
    pressCenter: {
      phone: string
      email: string
    }
  }
  fetchSettings: (language: string) => Promise<void>
}
