import { sanityFetch } from '@/config/sanity/client';
import { searchQuery } from '@/api/query';

import { SearchResponse } from '@/types/searchType';

export const getSearchData = async (searchText: string, language: string) => {
  const normalizedText = searchText.toLowerCase().trim();
  const text = `*${normalizedText}*`;
  return sanityFetch<Promise<SearchResponse>>(searchQuery, {
    text,
    language,
  });
};
