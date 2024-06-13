import { create } from 'zustand';
import { AnnualSummerSchoolStoreState } from '@/types/storeTypes';
import { getAnnualSchoolData } from '@/api';

const initialState = {
  applicationLink: null,
  button: '',
  isActive: false,
  concerts: null,
  currentConcert: null,
  conditions: null,
  description: null,
  isActiveConcerts: false,
  isActiveConditions: false,
  isActiveOrchestra: false,
  isActiveParticipants: false,
  isActiveProfessors: false,
  isActiveSchedule: false,
  orchestra: null,
  participants: null,
  professors: null,
  schedules: null,
  slug: '',
  year: '',
  banner: null,
  isCommonDataFetched: false,
};

export const useAnnualSummerSchoolStore = create<AnnualSummerSchoolStoreState>(
  (set, get) => ({
    requestLang: '',
    isLoading: false,

    ...initialState,

    resetData: () => {
      set({ ...initialState });
    },

    fetchData: async (language, year, fetchFm, other) => {
      const { requestLang, year: storeYear, resetData } = get();
      if (language !== requestLang || year !== storeYear) {
        resetData();
      }
      set({ isLoading: true });
      try {
        const resp = await fetchFm(language, year);

        set({
          ...resp,
          ...other,
          requestLang: language,
        });
      } catch (error) {
        console.log(error);
      } finally {
        set({ isLoading: false });
      }
    },

    fetchCommonData: async (language: string, year: string) => {
      const { fetchData } = get();
      fetchData(language, year, getAnnualSchoolData, {
        isCommonDataFetched: true,
      });
    },

    fetchConditions: async (language: string, year: string) => {
      const { fetchData } = get();
      fetchData(language, year, getAnnualSchoolData);
    },

    fetchConcerts: async (language: string, year: string) => {
      const { fetchData } = get();
      fetchData(language, year, getAnnualSchoolData);
    },

    fetchTimetable: async (language: string, year: string) => {
      const { fetchData } = get();
      fetchData(language, year, getAnnualSchoolData);
    },

    fetchParticipants: async (language: string, year: string) => {
      const { fetchData } = get();
      fetchData(language, year, getAnnualSchoolData);
    },

    fetchProfessors: async (language: string, year: string) => {
      const { fetchData } = get();
      fetchData(language, year, getAnnualSchoolData);
    },

    fetchArtists: async (language: string, year: string) => {
      const { fetchData } = get();
      fetchData(language, year, getAnnualSchoolData);
    },

    getCurrentConcert: (key) => {
      const { concerts } = get();
      if (!concerts) {
        //add fetcj for concerts
      }
      set((state) => ({
        currentConcert: state.concerts?.find((concert) => concert._key === key),
      }));
    },
  })
);
