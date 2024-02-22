import { create } from "zustand";
import { getHorowitzData } from "@/api";
import { HorowitzStoreState } from "@/types/storeTypes";

export const useHorowitzStore = create<HorowitzStoreState>((set) => ({
  bannerData: null,
  bannerCopyright: "",
  quote: {
    author: [],
    quote: [],
  },
  upperTextBlock: [],
  lowerTextBlock: [],
  literature: [],
  isLoading: false,
  requestLang: "",
  fetchHorowitzData: async (language) => {
    set({ isLoading: true });

    try {
      const horowitzData = await getHorowitzData(language);
      if (!horowitzData) {
        throw new Error("Could not fetch the data from that resource");
      }
      set({
        bannerData: horowitzData.banner,
        bannerCopyright: horowitzData.bannerCopyright,
        quote: horowitzData.quote,
        upperTextBlock: horowitzData.upperTextBlock || [],
        lowerTextBlock: horowitzData.lowerTextBlock || [],
        literature: horowitzData.literature || [],
        requestLang: language,
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
