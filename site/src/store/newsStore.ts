import { getNews } from '@/api';
import { NewsStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useNewsStore = create<NewsStoreState>()(set => ({
  newsList: { ua: null, en: null },
  loading: false,
  error: '',
  isLastEl: false,
  pageQty: 1,
  fetchNews: async (language, page) => {
    const PAGE_SIZE = 5;
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    set({ loading: true });
    try {
      const news = await getNews(language, start, end);

      set(state => ({
        newsList: { ...state.newsList, [language]: news },
        pageQty: Math.ceil(news[0].count / PAGE_SIZE),
      }));

      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      set({ error: error });
      console.log(error);
    }
  },
}));
