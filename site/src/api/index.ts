import { INews } from '@/types/newsTypes'
import { sanityFetch } from '../config/sanity/client'
import { SettingsResp } from '../types/сontactsTypes'
import { currentNewsQuery, newsQuery, settingsQuery } from './query'

export const getSettings = async (language: string): Promise<SettingsResp[]> => {
  return sanityFetch(settingsQuery, { language })
}
export const getNews = async (language: string): Promise<INews[]> => {
  return sanityFetch(newsQuery, { language })
}
export const getCurrentNews = async (language: string, slug: string): Promise<INews> => {
  return sanityFetch(currentNewsQuery, { language, slug })
}
