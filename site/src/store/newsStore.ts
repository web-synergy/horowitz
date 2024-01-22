import { getNews } from '@/api';
import { NewsStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useNewsStore = create<NewsStoreState>()((set, get) => ({
  newsList: [],
  currentNews: null,
  fetchNews: async (language, start, end) => {
    try {
      const news = await getNews(language);
      if (!news) throw new Error('could not fetch the data from that resource');
      set({
        newsList: news,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
