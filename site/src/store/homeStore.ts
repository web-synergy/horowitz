import { getHomeData } from '@/api';
import { HomeStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useHomeStore = create<HomeStoreState>((set) => ({
  loading: false,
  requestLang: '',
  error: '',
  news: [],
  videos: [],
  banner: null,
  winners: {
    list: null,
    title: null,
  },

  fetchHome: async (language) => {
    set({ loading: true, requestLang: language });
    try {
      const response = await getHomeData(language);
      set(response);

      set({ loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
