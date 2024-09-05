import {
  SearchType,
  TextResponse,
  ObjectResponseType,
} from '@/types/searchType';
import * as dayjs from 'dayjs';

export const generateSearchResponseItem = (
  value: TextResponse | ObjectResponseType,
  searchText: string,
  page: string,
  path: string,
  date?: string,
  title?: string
) => {
  if (!value) return [] as SearchType[];

  if (typeof value === 'string') {
    const splicesText = spliceSearchText(value, searchText);

    const answer: SearchType = {
      page: page,
      title: title ? title : page,
      text: splicesText,
      path: path,
      date: date ?? dayjs().format(),
    };
    return [answer];
  }

  const descriptionText = spliceSearchText(value.description, searchText);

  const answer: SearchType = {
    page: page,
    title: title ? title : page,
    text: descriptionText,
    path: path,
    date: date ?? dayjs().format(),
  };
  return [answer];
};

export const spliceSearchText = (text: string, searchText: string) => {
  const matchText = text.toLowerCase().match(searchText);

  if (matchText) {
    const index = matchText.index as number;

    return index > 10
      ? `...${text.slice(index - 10, index + 190)}...`
      : `${text.slice(0, 150)}...`;
  }

  return `${text.slice(0, 200)}...`;
};
