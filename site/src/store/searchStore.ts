import { SearchStoreState } from '@/types/storeTypes';
import { create } from 'zustand';
import { getSearchData } from '@/api';

export const useSearchStore = create<SearchStoreState>((set, get) => ({
  search: '',
  submitSearch: '',
  response: null,
  isLoading: false,
  reqLang: null,

  onChangeSearch: (value: string) => {
    set({ search: value });
  },

  onFetchSearching: async (lang: string) => {
    const { search, reqLang } = get();
    if (search === '') return;
    reqLang !== lang && set({ response: null });
    try {
      const response = await getSearchData(search, lang);
      set({ response, submitSearch: search });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
