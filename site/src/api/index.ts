import { IHorowitzData } from '@/types/horowitzTypes';
import { INews } from '@/types/newsTypes';
import { IAdministration } from '@/types/administrationTypes';
import { IUkrWorks } from '@/types/ukranianWorks';
import { sanityFetch } from '../config/sanity/client';
import { SettingsResp } from '../types/contactsTypes';
import { AboutCompetitionResp } from '@/types/aboutCompetitionTypes';
import {
  currentNewsQuery,
  partners,
  newsQuery,
  settingsQuery,
  administrationQuery,
  horowitzQuery,
  ukrWorksQuery,
  aboutCompetitionQuery,
  virtuososQuery,
  virtuososArticleQuery,
  currentArticleQuery,
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

export const getAboutCompetition = async (
  language: string
): Promise<AboutCompetitionResp> => {
  return sanityFetch(aboutCompetitionQuery, { language });
};

export const getAdministrationMembers = async (
  language: string
): Promise<IAdministration> => {
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

export const getUkrainianWorks = async (
  language: string
): Promise<IUkrWorks> => {
  return sanityFetch(ukrWorksQuery, { language });
};
