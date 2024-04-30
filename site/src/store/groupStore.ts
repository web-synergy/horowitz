import { OtherGroupState } from '@/types/storeTypes';
import { create } from 'zustand';
// import { Routes } from '@/types/routes.d';

export const useGroupStore = create<OtherGroupState>((set) => ({
  group: null,
  isLoading: false,
  requestLang: '',
  isCommonDataFetched: false,
  isActiveConditions: false,
  isActiveJury: false,
  isActiveTimetable: false,
  isActiveRequirements: false,
  isActiveParticipants: false,
  isActiveRewards: false,
  isActiveOrchestra: false,
  isActiveWinners: false,
  isActiveVenues: false,
  isActiveGuest: false,
  isActiveBooklet: false,
  isActivePreselectionJury: false,
  conditions: null,
  requirements: null,
  timetable: null,
  venues: null,
  prizes: null,
  rewards: null,
  artists: null,
  jury: null,

  fetchCommonData: async (id, language, group) => {
    set({ isLoading: true, requestLang: language });
    try {
      set({ isActiveBooklet: true });
      console.log(id);
      console.log(group);
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
