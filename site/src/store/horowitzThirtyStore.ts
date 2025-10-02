import { create } from 'zustand';
import { getHorowitzThirtyPage } from '@/api';
import { HorowitzThirtyState } from '@/types/storeTypes';

export const useHorowitzThirtyStore = create<HorowitzThirtyState>((set) => ({
  mainBanner: null,
  content: [],
  isLoading: false,

  requestLang: '',

  fetchHorowitzThirtyData: async (language) => {
    set({ isLoading: true });

    try {
      const response = await getHorowitzThirtyPage(language);
      if (!response) {
        throw new Error('Could not fetch the data from that resource');
      }
      set(() => ({ ...response, requestLang: language }));
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
