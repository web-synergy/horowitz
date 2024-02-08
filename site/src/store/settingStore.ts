import { getPartners, getSettings } from "@/api";
import { PartnersStoreState, SettingsStoreState } from "@/types/storeTypes";
import { create } from "zustand";

export const useSettingsStore = create<SettingsStoreState>()((set, get) => ({
  sociable: null,
  contacts: { ua: null, en: null },
  logo: null,
  competitions: { ua: null, en: null },
  fetchSettings: async (language) => {
    try {
      const settings = await getSettings(language);
      if (!settings)
        throw new Error("could not fetch the data from that resource");
      const { contacts, logo, sociable, competitions } = settings[0];
      set({
        sociable,
        logo,
        contacts: { ...get().contacts, [language]: contacts },
        competitions: { ...get().competitions, [language]: competitions },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getPreviewSettings: (settings, language) => {
    const { contacts, logo, sociable, competitions } = settings[1];
    set({
      sociable,
      logo,
      contacts: { ...get().contacts, [language]: contacts },
      competitions: { ...get().competitions, [language]: competitions },
    });
  },
}));

export const usePartnersStore = create<PartnersStoreState>()((set) => ({
  organizers: null,
  mainPartners: null,
  sponsors: null,
  generalInfoPartners: null,
  mainInfoPartners: null,
  officialInfoPartners: null,
  partners: null,
  filtered: [],

  fetchPartners: async () => {
    try {
      const resp = await getPartners();
      if (!resp) throw new Error("could not fetch data from that resource");

      const filtered = [];
      for (const item in resp) {
        if (item !== "organizers") {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const partner = JSON.parse(JSON.stringify(resp[item]));
          filtered.push(...partner);
        }
      }

      set({
        ...resp,
        filtered,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
