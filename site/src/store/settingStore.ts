import { getSettings } from '@/api';
import { SettingsStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useSettingsStore = create<SettingsStoreState>()((set, get) => ({
  sociable: null,
  contacts: { ua: null, en: null },
  logo: null,
  competitions: { ua: null, en: null },
  fetchSettings: async (language) => {
    try {
      const settings = await getSettings(language);
      if (!settings)
        throw new Error('could not fetch the data from that resource');
      const { contacts, logo, sociable, competitions } = settings[0];
      set({
        sociable,
        logo,
        contacts: { ...get().contacts, [language]: contacts },
        competitions: { ...get().competitions, [language]: competitions },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getPreviewSettings: (settings, language) => {
    const { contacts, logo, sociable, competitions } = settings[1];
    set({
      sociable,
      logo,
      contacts: { ...get().contacts, [language]: contacts },
      competitions: { ...get().competitions, [language]: competitions },
    });
  },
}));
