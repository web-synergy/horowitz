import { getSettings } from '@/api';
import { SettingsStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useSettingsStore = create<SettingsStoreState>()((set) => ({
  sociable: null,
  contacts: { ua: null, en: null },
  logo: null,
  fetchSettings: async (language) => {
    try {
      const settings = await getSettings(language);
      if (!settings)
        throw new Error('could not fetch the data from that resource');
      const { contacts, logo, sociable } = settings[0];

      set((state) => {
        return {
          sociable,
          logo,
          contacts: { ...state.contacts, [language]: contacts },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
