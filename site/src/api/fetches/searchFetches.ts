import { sanityFetch } from '@/config/sanity/client';
import { searchQuery } from '@/api/query';
import { Routes } from '@/types/routes.d';
import {
  generateSearchResponseItem,
  defineDocumentArray,
} from '@/utils/spliceSearchText';
import { SearchType, SearchResponse } from '@/types/searchType';

export const getSearchData = async (searchText: string, language: string) => {
  const normalizedText = searchText.toLowerCase().trim();
  const text = `*${normalizedText}*`;
  const searchResponse = await sanityFetch<Promise<SearchResponse>>(
    searchQuery,
    {
      text,
      language,
    }
  );

  const {
    administration,
    horowitz,
    about,
    urkWork,
    masterClass,
    news,
    virtuososMain,
    virtuosos,
    summerSchoolMain,
    summerSchools,
    competitions,
  } = searchResponse;

  const administrationSearch = administration.members.map((admin) => ({
    page: Routes.ADMINISTRATION,
    title: Routes.ADMINISTRATION,
    text: `...${admin.name} (${admin.role})...`,
    path: Routes.ADMINISTRATION,
  }));

  const horowitzSearch = generateSearchResponseItem(
    [Object.values(horowitz).filter((item) => !!item)[0]],
    normalizedText,
    Routes.HOROWITZ
  );

  const aboutSearch = generateSearchResponseItem(
    [Object.values(about).flat(1)[0]],
    normalizedText,
    Routes.ABOUT
  );

  const ukrWorksSearch = generateSearchResponseItem(
    [urkWork?.text],
    normalizedText,
    Routes.UKRAINIAN_WORKS
  );

  const masterClassSearch = masterClass.reduce((acc, item) => {
    const array = defineDocumentArray(item);

    const response = generateSearchResponseItem(
      array,
      normalizedText,
      Routes.MASTER_CLASS,
      `${Routes.MASTER_CLASS}/${item.slug}`,
      item.title
    );
    return [...acc, ...response];
  }, [] as SearchType[]);

  const newsSearch = news.reduce((acc, item) => {
    const array = defineDocumentArray(item);
    const response = generateSearchResponseItem(
      array,
      normalizedText,
      Routes.NEWS,
      `${Routes.NEWS}/${item.slug}`,
      item.title
    );
    return [...acc, ...response];
  }, [] as SearchType[]);

  const visrtuososMainsSearch = generateSearchResponseItem(
    [virtuososMain?.text],
    normalizedText,
    Routes.VIRTUOSES
  );

  const virtuososSearch = virtuosos.reduce((acc, item) => {
    const array = defineDocumentArray(item);
    const response = generateSearchResponseItem(
      array,
      normalizedText,
      Routes.VIRTUOSES_ARTICLE,
      `${Routes.VIRTUOSES_ARTICLE}/${item.slug}`,
      item.title
    );
    return [...acc, ...response];
  }, [] as SearchType[]);

  const summerSchoolMainsSearch = generateSearchResponseItem(
    [summerSchoolMain && Object.values(summerSchoolMain)[0]],
    normalizedText,
    Routes.SUMMER_SCHOOL
  );

  const summerSchoolsSearch = summerSchools.reduce((acc, school) => {
    const {
      slug,
      description,
      artists,
      concerts,
      conditions,
      participants,
      professors,
    } = school;

    const descriptionSearch = generateSearchResponseItem(
      [description],
      normalizedText,
      Routes.SUMMER_SCHOOL_MAIN,
      `${Routes.SUMMER_SCHOOL}/${slug}`
    );

    const artistsSearch = generateSearchResponseItem(
      [artists],
      normalizedText,
      Routes.SUMMER_SCHOOL_PLACES,
      `${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_PLACES}`
    );

    const conditionsSearch = generateSearchResponseItem(
      [conditions],
      normalizedText,
      Routes.SUMMER_SCHOOL_CONDITIONS,
      `${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_CONDITIONS}`
    );

    const concertSearch = concerts
      ? concerts.reduce((acc, item) => {
          if (item.description) {
            const descriptionSearch = generateSearchResponseItem(
              [item.description],
              normalizedText,
              Routes.SUMMER_SCHOOL_CONCERTS,
              `${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_CONCERTS}/${item.slug}`,
              item.title
            );
            return [...acc, ...descriptionSearch];
          }
          return acc;
        }, [] as SearchType[])
      : ([] as SearchType[]);

    const participantsSearch = participants
      ? participants.reduce(
          (acc, item) => {
            if (item.biography) {
              const biographySearch = generateSearchResponseItem(
                [item.biography],
                normalizedText,
                Routes.SUMMER_SCHOOL_STUDENTS,
                `${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_STUDENTS}/${item.slug}`,
                item.name || Routes.SUMMER_SCHOOL_STUDENTS
              );
              return [...acc, ...biographySearch];
            }

            if (item.name) {
              const nameSearch = generateSearchResponseItem(
                [item.name],
                normalizedText,
                Routes.SUMMER_SCHOOL_STUDENTS,
                `${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_STUDENTS}`,
                item.name
              );
              return [...acc, ...nameSearch];
            }

            return acc;
          },

          [] as SearchType[]
        )
      : ([] as SearchType[]);

    const professorsSearch = professors
      ? professors.reduce(
          (acc, item) => {
            if (item.about) {
              const biographySearch = generateSearchResponseItem(
                [item.about],
                normalizedText,
                Routes.SUMMER_SCHOOL_PROFESSORS,
                `${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_PROFESSORS}/${item.slug}`,
                item.name || Routes.SUMMER_SCHOOL_PROFESSOR
              );
              return [...acc, ...biographySearch];
            }

            if (item.name) {
              const nameSearch = generateSearchResponseItem(
                [item.name],
                normalizedText,
                Routes.SUMMER_SCHOOL_PROFESSORS,
                `${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_PROFESSORS}`,
                item.name
              );

              return [...acc, ...nameSearch];
            }

            return acc;
          },

          [] as SearchType[]
        )
      : ([] as SearchType[]);

    return [
      ...acc,
      ...descriptionSearch,
      ...artistsSearch,
      ...conditionsSearch,
      ...concertSearch,
      ...participantsSearch,
      ...professorsSearch,
    ];
  }, [] as SearchType[]);

  console.log(competitions);

  return [
    ...administrationSearch,
    ...horowitzSearch,
    ...aboutSearch,
    ...ukrWorksSearch,
    ...masterClassSearch,
    ...newsSearch,
    ...visrtuososMainsSearch,
    ...virtuososSearch,
    ...summerSchoolMainsSearch,
    ...summerSchoolsSearch,
  ];
};
