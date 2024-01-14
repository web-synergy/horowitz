import { getSettings } from '@/api'
import { SettingsStoreState } from '@/types/storeTypes'
import { create } from 'zustand'

export const useSettingsStore = create<SettingsStoreState>()(set => ({
  sociable: {},
  about: [],
  contacts: {
    address: '',
    phone: '',
    email: '',
  },
  fetchSettings: async language => {
    try {
      const settings = await getSettings(language)
      // console.log(settings[0].contacts)

      if (!settings) throw new Error('could not fetch the data from that resource')
      set({
        sociable: settings[0].sociable,
        about: settings[0].about,
        contacts: settings[0].contacts,
      })
    } catch (error) {
      console.log(error)
    }
  },
}))
