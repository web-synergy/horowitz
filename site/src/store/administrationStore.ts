import { create } from "zustand";
import { getAdministrationMembers } from "@/api";
import { AdministrationStoreState } from "@/types/storeTypes";

export const useAdministrationStore = create<AdministrationStoreState>(
  (set) => ({
    administrationData: null,
    fetchAdministrationData: async (language) => {
      try {
        const responseData = await getAdministrationMembers(language);
        if (!responseData) {
          throw new Error("Could not fetch the data from that resource");
        }
        set({
          administrationData: responseData.members,
        });
      } catch (error) {
        console.log(error);
      }
    },
  })
);
