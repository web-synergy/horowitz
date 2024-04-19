import { sanityFetch } from '../config/sanity/client';

import { AboutCompetitionType } from '@/types/aboutCompetitionTypes';
import { IAdministration } from '@/types/administrationTypes';
import { HomeData } from '@/types/homeTypes';
import { IHorowitzData } from '@/types/horowitzTypes';
import { INews } from '@/types/newsTypes';
import { PartnersType } from '@/types/partnersTypes';
import { ISummerSchool } from '@/types/summerSchoolTypes';
import { IUkrWorks } from '@/types/ukranianWorks';
import { IVirtuosos } from '@/types/virtuososTypes';
import { SettingsResp } from '../types/contactsTypes';

import {
  aboutCompetitionQuery,
  administrationQuery,
  currentArticleQuery,
  currentNewsQuery,
  getPDFQuery,
  homeQuery,
  horowitzQuery,
  newsQuery,
  partners,
  schoolData,
  settingsQuery,
  ukrWorksQuery,
  virtuososArticleQuery,
  virtuososQuery,
  annualSchoolData,
  competitionsQuery,
} from './query';
import { AnnualSummerSchoolTypes } from '@/types/annualSummerSchoolTypes';
import { CompetitionType } from '@/types/competitionTypes';

export const getHomeData = async (language: string): Promise<HomeData> => {
  return sanityFetch(homeQuery, { language });
};

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

export const getPartners = async (language: string): Promise<PartnersType> => {
  return sanityFetch(partners, { language });
};

export const getAboutCompetition = async (
  language: string
): Promise<AboutCompetitionType> => {
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

export async function getPDF(name: string) {
  return sanityFetch(getPDFQuery, { name });
}

export const getSummerSchoolData = (
  language: string
): Promise<ISummerSchool> => {
  return sanityFetch(schoolData, { language });
};

export const getAnnualSchoolData = (
  language: string,
  year: string
): Promise<AnnualSummerSchoolTypes> => {
  return sanityFetch(annualSchoolData, { language, year });
};

export const getCompetitionData = (
  slug: string,
  language: string
): Promise<CompetitionType> => {
  return sanityFetch(competitionsQuery, { slug, language });
};
