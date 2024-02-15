import { getSettings } from '@/api';
import { SettingsStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useSettingsStore = create<SettingsStoreState>()(set => ({
  sociable: null,
  contacts: null,
  logo: null,
  competitions: null,
  requestLang: '',
  fetchSettings: async language => {
    try {
      const settings = await getSettings(language);
      if (!settings)
        throw new Error('could not fetch the data from that resource');
      const { contacts, logo, sociable, competitions } = settings[0];
      set({
        sociable,
        logo,
        contacts,
        competitions,
        requestLang: language,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getPreviewSettings: settings => {
    const { contacts, logo, sociable, competitions } = settings[1];
    set({
      sociable,
      logo,
      contacts,
      competitions,
    });
  },
}));
