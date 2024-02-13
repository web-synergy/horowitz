import { getUkrainianWorks } from '@/api';

import { UkrWorksStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useUkrWorksStore = create<UkrWorksStoreState>()((set) => ({
  works: null,

  fetchWorks: async (language) => {
    const data = await getUkrainianWorks(language);
    set({ works: data });
  },
}));
