import { getCompetitionData } from '@/api';
import { CompetitionStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useCompetitionStore = create<CompetitionStoreState>((set) => ({
  isLoading: false,
  requestLang: '',
  title: '',
  slug: '',
  description: null,
  isWarState: false,
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
      const {
        title,
        description,
        isWarState,
        junior,
        intermediate,
        senior,
        intermediateBtn,
        juniorBtn,
        mainBanner,
        seniorBtn,
      } = await getCompetitionData(slug, language);
      //   const response = await getCompetitionData(slug, language);
      //   console.log(response);
      set({
        title,
        description,
        isWarState,
        junior,
        intermediate,
        senior,
        slug,
        juniorBtn,
        intermediateBtn,
        seniorBtn,
        mainBanner,
      });

      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });

      console.log(error);
    }
  },
}));
