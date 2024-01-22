import { create } from "zustand";
import { getHorowitzData } from "@/api";
import { HorowitzStoreState } from "@/types/storeTypes";

export const useHorowitzStore = create<HorowitzStoreState>((set) => ({
  bannerData: {
    bannerCopyright: "",
    bannerImg: "",
  },
  quote: {
    author: [],
    quote: [],
  },
  upperBlockText: [],
  lowerBlockText: [],
  literature: [],
  loading: false,
  fetchHorowitzData: async (language) => {
    set({ loading: true });

    try {
      const horowitzData = await getHorowitzData(language);
      if (!horowitzData) {
        throw new Error("Could not fetch the data from that resource");
      }
      set({
        bannerData: horowitzData.bannerData,
        quote: horowitzData.quote,
        upperBlockText: horowitzData.upperBlockText || [],
        lowerBlockText: horowitzData.lowerBlockText || [],
        literature: horowitzData.literature || [],
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
