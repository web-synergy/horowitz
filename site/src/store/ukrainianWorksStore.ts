import { getUkrainianWorks } from '@/api';

import { UkrWorksStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useUkrWorksStore = create<UkrWorksStoreState>()((set) => ({
  works: null,
  requestLang: '',
  isLoading: false,

  fetchWorks: async (language) => {
    set({ isLoading: true });
    try {
      const data = await getUkrainianWorks(language);
      set({ works: data, requestLang: language });
    } catch (error) {
      console.log('error: ', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
