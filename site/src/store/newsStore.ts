import { getCurrentNews, getNews } from '@/api';
import { NewsStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useNewsStore = create<NewsStoreState>()((set, get) => ({
  newsList: [],
  currentNews: null,
  fetchNews: async (language, start, end) => {
    try {
      const news = await getNews(language, start, end);
      if (!news) throw new Error('could not fetch the data from that resource');
      set({
        newsList: [...get().newsList, ...news],
      });
    } catch (error) {
      console.log(error);
    }
  },
  getCurrentNews: async (language, slug) => {
    try {
      const news = await getCurrentNews(language, slug);
      if (!news) throw new Error('could not fetch the data from that resource');
      set({
        currentNews: news,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
