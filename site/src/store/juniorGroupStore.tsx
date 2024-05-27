import {
  getJuniorGroupData,
  getJuniorConditionsData,
  getJuniorRequirementsData,
  getJuniorTimetableData,
  getJuniorVenuesData,
  getJuniorRewardsData,
  getJuniorArtistsData,
  getJuniorJuryData,
  getJuniorStudentsJuryData,
  getJuniorGuestsData,
  getJuniorBookletData,
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
  isActiveOrchestra: false,
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
  jury: null,
  studentsJury: null,
  guests: null,
  booklet: null,
  debut: null,
  junior: null,
  winnersGallery: null,
  winners: null,
  galleries: null,
};

export const useJuniorGroupStore = create<JuniorGroupState>((set, get) => ({
  isLoading: false,
  requestLang: '',
  ...initialState,

  resetData: () => {
    set({ ...initialState });
  },

  fetchData: async (id, language, fetchFn, other) => {
    const { requestLang, resetData } = get();
    if (language !== requestLang) {
      resetData();
    }
    set({ isLoading: true, requestLang: language });
    try {
      const response = await fetchFn(id, language);

      set({ ...response, ...other });
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
    fetchData(id, language, getJuniorConditionsData);
  },

  fetchRequirements: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorRequirementsData);
  },

  fetchTimetable: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorTimetableData);
  },

  fetchVenues: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorVenuesData);
  },

  fetchRewards: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorRewardsData);
  },

  fetchArtists: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorArtistsData);
  },

  fetchJury: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorJuryData);
  },

  fetchStudentsJury: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorStudentsJuryData);
  },

  fetchGuests: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorGuestsData);
  },

  fetchBooklet: async (id, language) => {
    const { fetchData } = get();
    fetchData(id, language, getJuniorBookletData);
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
