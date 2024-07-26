import { SearchStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useSearchStore = create<SearchStoreState>((set, get) => ({
    search: '',
    
  onChangeSearch: (value: string) => {
    set({ search: value });
  },
  onFetchSearching: () => {
    const { search } = get();
    console.log('fetch search: ', search);
  },
}));
