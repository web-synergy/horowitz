// import { getOtherGroupData } from '@/api';
import { OtherGroupState } from '@/types/storeTypes';
import { create } from 'zustand';
import {
  getOtherGroupData,
  getGroupConditionsData,
  getGroupJuryData,
  getGroupTimetableData,
  getGroupRequirementsData,
  getOtherGroupPreselectionJuryData,
  getGroupRewardsData,
  getGroupArtistsData,
  getGroupVenuesData,
  getGroupGuestsData,
  getGroupBookletData,
  getOtherGroupParticipantsData,
  getOtherGroupWinnersData,
} from '@/api';

const initialState = {
  isCommonDataFetched: false,
  isActiveConditions: false,
  isActiveJury: false,
  isActivePreselectionJury: false,
  isActiveTimetable: false,
  isActiveRequirements: false,
  isActiveParticipants: false,
  isActiveRewards: false,
  isActiveArtists: false,
  isActiveWinners: false,
  isActiveVenues: false,
  isActiveGuests: false,
  isActiveBooklet: false,
  preselectionJury: null,
  conditions: null,
  requirements: null,
  timetable: null,
  venues: null,
  rewards: null,
  prizes: null,
  artists: null,
  juries: null,
  guests: null,
  booklet: null,
  winnersGallery: null,
  winners: null,
  participants: null,
};

export const useOtherGroupStore = create<OtherGroupState>((set, get) => ({
  isLoading: false,
  requestLang: '',
  group: null,
  ...initialState,

  resetData: () => {
    set({ ...initialState });
  },

  fetchData: async (id, language, group, fetchFn, other) => {
    const { requestLang, resetData, group: storeGroup } = get();

    if (language !== requestLang || group !== storeGroup) {
      await resetData();
    }

    set({ isLoading: true, requestLang: language, group: group });

    try {
      const response = await fetchFn(id, language, group);
      set({ ...response, ...other });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchCommonData: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getOtherGroupData, {
      isCommonDataFetched: true,
    });
  },

  fetchConditions: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getGroupConditionsData);
  },

  fetchRequirements: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getGroupRequirementsData);
  },

  fetchTimetable: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getGroupTimetableData);
  },
  fetchVenues: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getGroupVenuesData);
  },
  fetchRewards: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getGroupRewardsData);
  },

  fetchArtists: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getGroupArtistsData);
  },

  fetchJury: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getGroupJuryData);
  },

  fetchPreselectionJury: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getOtherGroupPreselectionJuryData);
  },

  fetchGuests: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getGroupGuestsData);
  },

  fetchBooklet: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getGroupBookletData);
  },

  fetchParticipants: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getOtherGroupParticipantsData);
  },

  fetchWinnersData: async (id, language, group) => {
    const { fetchData } = get();
    fetchData(id, language, group, getOtherGroupWinnersData);
  },
}));
