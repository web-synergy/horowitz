import { getHorowitzData } from "@/api";
import { create } from "zustand";

export interface HorowitzStoreState {
  horowitzData: null;
  loading: boolean;
  fetchHorowitzData: (language: string) => Promise<void>;
}

export const useHorowitzStore = create<HorowitzStoreState>((set) => ({
  bannerData: null,
  quote: null,
  upperBlockText: null,
  lowerBlockText: null,
  literature: null,
  horowitzData: null,
  loading: false,
  fetchHorowitzData: async (language) => {
    set({ loading: true });

    try {
      const horowitzData = await getHorowitzData(language);
      console.log(horowitzData);
      if (!horowitzData)
        throw new Error("Could not fetch the data from that resource");
      set({
        horowitzData: horowitzData,
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
