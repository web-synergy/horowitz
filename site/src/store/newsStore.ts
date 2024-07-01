import { getNews } from '@/api';

import { NewsStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useNewsStore = create<NewsStoreState>()((set) => ({
  newsList: [],
  loading: false,
  error: '',
  pageQty: 1,
  currentPage: 0,
  requestLang: '',
  fetchNews: async (language, page) => {
    const PAGE_SIZE = 10;
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    set({ loading: true, currentPage: page, requestLang: language });
    try {
      const news = await getNews(language, start, end);

      set({
        newsList: news,
        pageQty: Math.ceil(news[0].count / PAGE_SIZE),
      });

      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      set({ error: error });
      console.log(error);
    }
  },
}));
