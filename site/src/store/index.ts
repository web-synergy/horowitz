import { getSettings } from '@/api'
import { SettingsStoreState } from '@/types/storeTypes'
import { create } from 'zustand'

export const useSettingsStore = create<SettingsStoreState>()(set => ({
  sociable: {},
  about: [],
  fetchSettings: async language => {
    try {
      const settings = await getSettings(language)

      if (!settings) throw new Error('could not fetch the data from that resource')
      set({ sociable: settings[0].sociable, about: settings[0].about })
    } catch (error) {
      console.log(error)
    }
  },
}))
