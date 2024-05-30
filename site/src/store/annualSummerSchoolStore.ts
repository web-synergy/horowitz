import { create } from 'zustand';
import { AnnualSummerSchoolStoreState } from '@/types/storeTypes';
import { getAnnualSchoolData } from '@/api';

export const useAnnualSummerSchoolStore = create<AnnualSummerSchoolStoreState>(
  (set) => ({
    requestLang: '',
    isLoading: false,
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
    slug: { current: '' },
    year: '',
    banner: null,

    fetchAnnualSummerSchool: async (language: string, year: string) => {
      set({ isLoading: true });
      try {
        const resp = await getAnnualSchoolData(language, year);

        if (!resp)
          throw new Error('Could not fetch the data from that resource');
        set({
          ...resp,
          requestLang: language,
          concerts: resp.concerts,
          isLoading: false,
        });
      } catch (error) {
        set({ isLoading: false });
        console.log(error);
      }
    },
    getCurrentConcert: (key) => {
      set((state) => ({
        currentConcert: state.concerts?.find((concert) => concert._key === key),
      }));
    },
  })
);
