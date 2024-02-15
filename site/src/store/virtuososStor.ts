import { getVirtuosos, getVirtuososArticle } from '@/api';
import { VirtuososStoreState } from '@/types/storeTypes';
import { create } from 'zustand';

export const useVirtuososStore = create<VirtuososStoreState>()(set => ({
  loading: false,
  articleList: [],
  pageQty: 1,
  virtuosos: null,
  requestLang: '',

  fetchVirtuosos: async language => {
    set({ loading: true });

    try {
      const virtuosos = await getVirtuosos(language);
      set({
        virtuosos,
        requestLang: language,
      });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      console.log(error);
    }
  },
  fetchVirtuososArticles: async (language, page) => {
    const PAGE_SIZE = 5;
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    set({ loading: true });
    try {
      const articles = await getVirtuososArticle(language, start, end);

      set({
        articleList: articles,
        pageQty: Math.ceil(articles[0].count / PAGE_SIZE),
      });

      set({ loading: false });
    } catch (error) {
      set({ loading: false });

      console.log(error);
    }
  },
}));
