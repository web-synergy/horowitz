import { getSettings } from '@/api';
import { SettingsStoreState } from '@/types/storeTypes';
import { create } from 'zustand';
import seoImage from '@/assets/images/seo.webp';

export const useSettingsStore = create<SettingsStoreState>()((set) => ({
  sociable: null,
  contacts: null,
  logo: null,
  seoImage: seoImage,
  competitions: null,
  requestLang: '',
  isLoading: false,

  fetchSettings: async (language) => {
    set({ isLoading: true });
    try {
      const settings = await getSettings(language);
      if (!settings)
        throw new Error('could not fetch the data from that resource');
      const { sociable, logo, contacts, competitions } = settings;

      set({
        sociable,
        logo,
        contacts,
        competitions,
        requestLang: language,
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  getPreviewSettings: (settings) => {
    const { contacts, logo, sociable, competitions } = settings;
    set({
      sociable,
      logo,
      contacts,
      competitions,
    });
  },
}));
