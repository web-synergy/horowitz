import { sanityFetch } from '../config/sanity/client'
import { SettingsResp } from '../types/сontactsTypes'
import { settingsQuery } from './query'

export const getSettings = async (language: string): Promise<SettingsResp[]> => {
  return sanityFetch(settingsQuery, { language })
}
