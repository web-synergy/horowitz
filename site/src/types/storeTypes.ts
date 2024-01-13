export interface SettingsStoreState {
  sociable: {
    facebook?: string
    instagram?: string
    youTube?: string
  }
  fetchSettings: (language: string) => Promise<void>
}
