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
  junior: {},
  intermediate: {},
  senior: {},

  fetchCommonData: async (slug, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const { title, description, isWarState, junior, intermediate, senior } =
        await getCompetitionData(slug, language);
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
      });

      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });

      console.log(error);
    }
  },
}));
