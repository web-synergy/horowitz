import { sanityFetch } from '../config/sanity/client';
import { settingsQuery } from './query';

export const getSettings = async (language: string) => {
  return sanityFetch<unknown>(settingsQuery, { language });
};
