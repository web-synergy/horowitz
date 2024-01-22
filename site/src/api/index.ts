import { sanityFetch } from "../config/sanity/client";
import { SettingsResp } from "../types/contactsTypes";
import { settingsQuery } from "./query";
import { horowitzQuery } from "./query";
import { IHorowitzData } from "@/types/horowitzTypes";

export const getSettings = async (
  language: string
): Promise<SettingsResp[]> => {
  return sanityFetch(settingsQuery, { language });
};

export const getHorowitzData = async (
  language: string
): Promise<IHorowitzData> => {
  return sanityFetch(horowitzQuery, { language });
};
