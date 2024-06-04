import { create } from 'zustand';
import { getAboutCompetition } from '@/api';
import { AboutCompetitionState } from '@/types/storeTypes';

export const useAboutCompetitionStore = create<AboutCompetitionState>(
  (set) => ({
    mainBanner: null,
    blocks: [],
    isLoading: false,
    additionalText: [],
    requestLang: '',

    fetchAboutCompetitionData: async (language) => {
      set({ isLoading: true });

      try {
        const response = await getAboutCompetition(language);
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
  })
);
