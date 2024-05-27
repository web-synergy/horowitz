// import { getOtherGroupData } from '@/api';
import { OtherGroupState } from '@/types/storeTypes';
import { create } from 'zustand';
import { getOtherGroupCommonData } from '@/api';

const initialState = {
  isCommonDataFetched: false,
  isActiveConditions: false,
  isActiveJury: false,
  isActivePreselectionJury: false,
  isActiveTimetable: false,
  isActiveRequirements: false,
  isActiveParticipants: false,
  isActiveRewards: false,
  isActiveOrchestra: false,
  isActiveWinners: false,
  isActiveVenues: false,
  isActiveGuests: false,
  isActiveBooklet: false,

  conditions: null,
  requirements: null,
  timetable: null,
  venues: null,
  rewards: null,
  prizes: null,
  artists: null,
  jury: null,
  guests: null,
  booklet: null,
  winnersGallery: null,
  winners: null,
};

export const useIntermediateGroupStore = create<OtherGroupState>(
  (set, get) => ({
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
      fetchData(id, language, getOtherGroupCommonData, {
        isCommonDataFetched: true,
      });
    },

    //   fetchConditions: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { conditions } = await getJuniorConditionsData(id, language);
    //       set({ conditions });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },
    //   fetchRequirements: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { requirements } = await getJuniorRequirementsData(id, language);
    //       set({ requirements });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },
    //   fetchTimetable: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { timetable } = await getJuniorTimetableData(id, language);
    //       set({ timetable });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },
    //   fetchVenues: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { venues } = await getJuniorVenuesData(id, language);
    //       set({ venues });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },
    //   fetchRewards: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { rewards, prizes } = await getJuniorRewardsData(id, language);
    //       set({ rewards, prizes });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },

    //   fetchArtists: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { artists } = await getJuniorArtistsData(id, language);
    //       set({ artists });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },

    //   fetchJury: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { jury } = await getJuniorJuryData(id, language);
    //       set({ jury });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },

    //   fetchStudentsJury: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { studentsJury } = await getJuniorStudentsJuryData(id, language);
    //       set({ studentsJury });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },

    //   fetchGuests: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { guests } = await getJuniorGuestsData(id, language);
    //       set({ guests });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },

    //   fetchBooklet: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { booklet } = await getJuniorBookletData(id, language);
    //       set({ booklet });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },

    //   fetchParticipants: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { debut, junior } = await getJuniorParticipantsData(id, language);
    //       set({ debut, junior });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },

    //   fetchWinnersData: async (id, language) => {
    //     set({ isLoading: true, requestLang: language });
    //     try {
    //       const { galleries, winners } = await getJuniorWinnersData(id, language);
    //       set({ galleries, winners });
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       set({ isLoading: false });
    //     }
    //   },
  })
);
