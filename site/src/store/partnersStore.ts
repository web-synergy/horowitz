import { create } from 'zustand';
import { getPartners } from '@/api';
import { PartnersStoreState } from '@/types/storeTypes';

export const usePartnersStore = create<PartnersStoreState>()((set) => ({
  organizers: null,
  mainPartners: null,
  sponsors: null,
  generalInfoPartners: null,
  mainInfoPartners: null,
  officialInfoPartners: null,
  partners: null,
  requestLang: null,

  fetchPartners: async (language: string) => {
    try {
      const resp = await getPartners(language);
      if (!resp) throw new Error('could not fetch data from that resource');

      set(() => ({ ...resp, requestLang: language }));
    } catch (error) {
      console.log(error);
    }
  },
}));
