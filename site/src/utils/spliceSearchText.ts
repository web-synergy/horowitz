import { Routes } from '@/types/routes.d';
import {
  SearchType,
  TextResponse,
  MasterClassSearchType,
} from '@/types/searchType';

export const generateSearchResponseItem = (
  value: TextResponse[],
  searchText: string,
  routes: Routes,
  path?: string,
  title?: string
) => {
  return value.reduce((acc, item) => {
    if (item) {
      const splicesText = spliceSearchText(item, searchText);

      if (splicesText) {
        const answer = {
          page: routes,
          title: title ? title : routes,
          text: splicesText,
          path: path ? path : routes,
        };
        return [...acc, answer];
      }
    }
    return acc;
  }, [] as SearchType[]);
};

export const spliceSearchText = (text: string, searchText: string) => {
  const matchText = text.toLowerCase().match(searchText);

  if (matchText) {
    const index = matchText.index as number;

    return index > 10
      ? `...${text.slice(index - 10, index + 140)}...`
      : `${text.slice(0, 150)}...`;
  }
  return null;
};

export const defineDocumentArray = (value: MasterClassSearchType) => {
  const { description, title } = value;
  return description && title ? [description] : [description, title];
};
