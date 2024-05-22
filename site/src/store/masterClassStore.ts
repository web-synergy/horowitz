import { getMasterClasses } from "@/api";

import { NewsStoreState } from "@/types/storeTypes";
import { create } from "zustand";

export const useMasterClassStore = create()((set) => ({
  masterClassesList: [],
  loading: false,
  error: "",
  pageQty: 1,
  currentPage: 0,
  requestLang: "",
  fetchNews: async (language, page) => {
    const PAGE_SIZE = 10;
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    set({ loading: true, currentPage: page, requestLang: language });
    try {
      const masterClasses = await getMasterClasses(language, start, end);

      set({
        masterClassesList: masterClasses,
        pageQty: Math.ceil(masterClasses[0].count / PAGE_SIZE),
      });

      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      set({ error: error });
      console.log(error);
    }
  },
}));
