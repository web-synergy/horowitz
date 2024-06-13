import {
  getJuniorGroupData,
  getGroupConditionsData,
  getGroupJuryData,
  getGroupRequirementsData,
  getGroupTimetableData,
  getGroupVenuesData,
  getGroupRewardsData,
  getGroupArtistsData,
  getJuniorStudentsJuryData,
  getGroupGuestsData,
  getGroupBookletData,
  getJuniorParticipantsData,
  getJuniorWinnersData,
} from '@/api';
import { JuniorGroupState } from '@/types/storeTypes';
import { create } from 'zustand';

const initialState = {
  isCommonDataFetched: false,
  isActiveConditions: false,
  isActiveJury: false,
  isActiveTimetable: false,
  isActiveRequirements: false,
  isActiveParticipants: false,
  isActiveRewards: false,
  isActiveArtists: false,
  isActiveWinners: false,
  isActiveVenues: false,
  isActiveGuests: false,
  isActiveBooklet: false,
  isActiveStudentsJury: false,
  conditions: null,
  requirements: null,
  timetable: null,
  venues: null,
  rewards: null,
  prizes: null,
  artists: null,
  juries: null,
  studentsJury: null,
  guests: null,
  booklet: null,
  juniorGallery: null,
  winners: null,
  galleries: null,
  studentJuryDesc: '',
  participants: null,
};

export const useJuniorGroupStore = create<JuniorGroupState>((set, get) => ({
  isLoading: false,
  requestLang: '',
  group: 'junior',
  ...initialState,

  resetData: () => {
    set({ ...initialState });
  },

  fetchData: async (id, language, fetchFn, other) => {
    const { requestLang, resetData } = get();
    if (language !== requestLang) {
      resetData();
    }
    set({ isLoading: true });
    try {
      const response = await fetchFn(id, language);

      set({ ...response, ...other, requestLang: language });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchCommonData: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorGroupData, { isCommonDataFetched: true });
  },

  fetchConditions: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getGroupConditionsData);
  },

  fetchRequirements: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getGroupRequirementsData);
  },

  fetchTimetable: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getGroupTimetableData);
  },

  fetchVenues: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getGroupVenuesData);
  },

  fetchRewards: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getGroupRewardsData);
  },

  fetchArtists: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getGroupArtistsData);
  },

  fetchJury: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getGroupJuryData);
  },

  fetchStudentsJury: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorStudentsJuryData);
  },

  fetchGuests: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getGroupGuestsData);
  },

  fetchBooklet: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getGroupBookletData);
  },

  fetchParticipants: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorParticipantsData);
  },

  fetchWinnersData: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorWinnersData);
  },
}));
