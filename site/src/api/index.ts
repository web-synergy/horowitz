import { IHorowitzData } from '@/types/horowitzTypes';
import {
  currentArticleQuery,
  horowitzQuery,
  virtuososArticleQuery,
  virtuososQuery,
} from './query';

import { INews } from '@/types/newsTypes';
import { Member } from '@/types/administrationTypes';
import { sanityFetch } from '../config/sanity/client';
import { SettingsResp } from '../types/contactsTypes';
import {
  currentNewsQuery,
  partners,
  newsQuery,
  settingsQuery,
  administrationQuery,
} from './query';

import { PartnersResp } from '@/types/partnersTypes';
import { IVirtuosos } from '@/types/virtuososTypes';

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

export const getNews = async (
  language: string,
  firstEl: number,
  lastEl: number
): Promise<INews[]> => {
  return sanityFetch(newsQuery, { language, firstEl, lastEl });
};
export const getCurrentNews = async (
  language: string,
  slug: string
): Promise<INews> => {
  return sanityFetch(currentNewsQuery, { language, slug });
};

export const getPartners = async (language: string): Promise<PartnersResp> => {
  return sanityFetch(partners, { language });
};

export const getAdministrationMembers = async (
  language: string
): Promise<{ members: Member[] }> => {
  return sanityFetch(administrationQuery, { language });
};

export const getVirtuosos = async (language: string): Promise<IVirtuosos> => {
  return sanityFetch(virtuososQuery, { language });
};

export const getVirtuososArticle = async (
  language: string,
  firstEl: number,
  lastEl: number
): Promise<INews[]> => {
  return sanityFetch(virtuososArticleQuery, { language, firstEl, lastEl });
};

export const getCurrentArticle = async (
  language: string,
  slug: string
): Promise<INews> => {
  return sanityFetch(currentArticleQuery, { language, slug });
};
