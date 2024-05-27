import { sanityFetch } from '@/config/sanity/client';
import { CompetitionType } from '@/types/competitionTypes';

import { competitionsQuery } from '../query';

export const getCompetitionData = (
  slug: string,
  language: string
): Promise<CompetitionType> => {
  return sanityFetch(competitionsQuery, { slug, language });
};
