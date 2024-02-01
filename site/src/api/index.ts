import { IHorowitzData } from '@/types/horowitzTypes'
import { horowitzQuery } from './query'

import { INews } from '@/types/newsTypes'
import { sanityFetch } from '../config/sanity/client'
import { SettingsResp } from '../types/contactsTypes'
import { currentNewsQuery, partners, newsQuery, settingsQuery } from './query'

import { PartnersResp } from '@/types/partnersTypes'

export const getSettings = async (language: string): Promise<SettingsResp[]> => {
  return sanityFetch(settingsQuery, { language })
}

export const getHorowitzData = async (language: string): Promise<IHorowitzData> => {
  return sanityFetch(horowitzQuery, { language })
}

export const getNews = async (
  language: string,
  firstEl: number,
  lastEl: number
): Promise<INews[]> => {
  return sanityFetch(newsQuery, { language, firstEl, lastEl })
}
export const getCurrentNews = async (language: string, slug: string): Promise<INews> => {
  return sanityFetch(currentNewsQuery, { language, slug })
}

export const getPartners = async (): Promise<PartnersResp> => {
  return sanityFetch(partners)
}
