import {
  getJuniorGroupData,
  getJuniorConditionsData,
  getJuniorRequirementsData,
  getJuniorTimetableData,
  getJuniorVenuesData,
  getJuniorRewardsData,
  getJuniorArtistsData,
  getJuniorJuryData,
} from '@/api';
import { JuniorGroupState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useJuniorGroupStore = create<JuniorGroupState>((set) => ({
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
  isActiveStudentsJury: false,
  conditions: null,
  requirements: null,
  timetable: null,
  venues: null,
  rewards: null,
  prizes: null,
  artists: null,
  jury: null,

  fetchCommonData: async (id, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const response = await getJuniorGroupData(id, language);
      set({ ...response, isCommonDataFetched: true });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchConditions: async (id, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const { conditions } = await getJuniorConditionsData(id, language);
      set({ conditions });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchRequirements: async (id, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const { requirements } = await getJuniorRequirementsData(id, language);
      set({ requirements });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchTimetable: async (id, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const { timetable } = await getJuniorTimetableData(id, language);
      set({ timetable });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchVenues: async (id, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const { venues } = await getJuniorVenuesData(id, language);
      set({ venues });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchRewards: async (id, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const { rewards, prizes } = await getJuniorRewardsData(id, language);
      set({ rewards, prizes });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchArtists: async (id, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const { artists } = await getJuniorArtistsData(id, language);
      set({ artists });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchJury: async (id, language) => {
    set({ isLoading: true, requestLang: language });
    try {
      const { jury } = await getJuniorJuryData(id, language);
      set({ jury });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
