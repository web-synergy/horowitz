export interface SettingsStoreState {
  sociable: {
    facebook?: string
    instagram?: string
    youTube?: string
  }
  about: never[]
  fetchSettings: (language: string) => Promise<void>
}
