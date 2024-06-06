import { getCompetitionData } from '@/api';
import { CompetitionStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useCompetitionStore = create<CompetitionStoreState>((set) => ({
  isLoading: false,
  requestLang: '',
  title: '',
  slug: '',
  description: null,
  isStubActive: false,
  stubText: '',
  junior: {
    isActive: false,
    _id: '',
  },
  intermediate: {
    isActive: false,
    _id: '',
  },
  senior: {
    isActive: false,
    _id: '',
  },
  intermediateBtn: null,
  juniorBtn: null,
  seniorBtn: null,
  mainBanner: null,

  fetchCommonData: async (slug, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const response = await getCompetitionData(slug, language);
      set({
        ...response,
      });

      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });

      console.log(error);
    }
  },
}));
