import { useTranslation } from 'react-i18next';
import { useSearchStore } from '@/store/searchStore';
import { Routes } from '@/types/routes.d';
import { SearchType } from '@/types/searchType';
import { DateTime } from 'luxon';

import { generateSearchResponseItem } from '@/utils/spliceSearchText';

const useSearchResults = () => {
  const { t } = useTranslation();
  const { response, submitSearch } = useSearchStore();

  const normalizedText = submitSearch.toLowerCase().trim();
  if (!response) {
    return { result: null };
  }

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
  } = response;

  const administrationSearch = administration.members.map((admin) => ({
    page: t(`navigation.${Routes.ADMINISTRATION}`),
    title: t(`navigation.${Routes.ADMINISTRATION}`),
    text: `...${admin.name} (${admin.role})...`,
    path: `/${Routes.ADMINISTRATION}`,
    date: DateTime.now().toISO(),
  }));

  const horowitzSearch = generateSearchResponseItem(
    Object.values(horowitz).filter((item) => !!item)[0],
    normalizedText,
    t(`navigation.${Routes.HOROWITZ}`),
    `/${Routes.HOROWITZ}`
  );

  const aboutSearch = generateSearchResponseItem(
    Object.values(about).flat(1)[0],
    normalizedText,
    t(`navigation.${Routes.DETAILS}`),
    `/${Routes.DETAILS}`
  );

  const ukrWorksSearch = generateSearchResponseItem(
    urkWork?.text,
    normalizedText,
    t(`navigation.${Routes.UKRAINIAN_WORKS}`),
    `/${Routes.UKRAINIAN_WORKS}`
  );

  const visrtuososMainsSearch = generateSearchResponseItem(
    virtuososMain?.text,
    normalizedText,
    t(`navigation.${Routes.VIRTUOSES}`),
    `/${Routes.VIRTUOSES}`
  );

  const summerSchoolMainsSearch = generateSearchResponseItem(
    summerSchoolMain && Object.values(summerSchoolMain)[0],
    normalizedText,
    t(`navigation.${Routes.SUMMER_SCHOOL}`),
    `/${Routes.SUMMER_SCHOOL}`
  );

  const masterClassSearch = masterClass.reduce((acc, item) => {
    const response = generateSearchResponseItem(
      item,
      normalizedText,
      t(`navigation.${Routes.MASTER_CLASS}`),
      `/${Routes.MASTER_CLASS}/${item.slug}`,
      item.date,
      item.title
    );

    return [...acc, ...response];
  }, [] as SearchType[]);

  const newsSearch = news.reduce((acc, item) => {
    const response = generateSearchResponseItem(
      item,
      normalizedText,
      t(`navigation.${Routes.NEWS}`),
      `/${Routes.NEWS}/${item.slug}`,
      item.date,
      item.title
    );
    return [...acc, ...response];
  }, [] as SearchType[]);

  const virtuososSearch = virtuosos.reduce((acc, item) => {
    const { date, slug, title } = item;
    const response = generateSearchResponseItem(
      item,
      normalizedText,
      t(`navigation.${Routes.VIRTUOSES}`) +
        '/' +
        t(`navigation.${Routes.NEWS}`),
      `/${Routes.VIRTUOSES_ARTICLE}/${slug}`,
      date,
      title
    );
    return [...acc, ...response];
  }, [] as SearchType[]);

  const summerSchoolsSearch = summerSchools.reduce((acc, school) => {
    const {
      slug,
      description,
      artists,
      concerts,
      conditions,
      participants,
      professors,
      date,
      year,
    } = school;

    const descriptionSearch = generateSearchResponseItem(
      description,
      normalizedText,
      t(`navigation.${Routes.SUMMER_SCHOOL_MAIN}`, { year: year }),
      `/${Routes.SUMMER_SCHOOL}/${slug}`,
      date
    );

    const artistsSearch = generateSearchResponseItem(
      artists,
      normalizedText,
      t(`navigation.${Routes.SUMMER_SCHOOL_MAIN}`, { year: year }),
      `/${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_PLACES}`,
      date,
      t(`navigation.${Routes.SUMMER_SCHOOL_PLACES}`)
    );

    const conditionsSearch = generateSearchResponseItem(
      conditions,
      normalizedText,
      t(`navigation.${Routes.SUMMER_SCHOOL_MAIN}`, { year: year }),
      `/${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_CONDITIONS}`,
      date,
      t(`navigation.${Routes.SUMMER_SCHOOL_CONDITIONS}`)
    );

    const concertSearch = concerts
      ? concerts.reduce((acc, item) => {
          const descriptionSearch = generateSearchResponseItem(
            item,
            normalizedText,
            t(`navigation.${Routes.SUMMER_SCHOOL_MAIN}`, { year: year }),
            `/${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_CONCERTS}/${item.slug}`,
            date,
            item.title
          );
          return [...acc, ...descriptionSearch];
        }, [] as SearchType[])
      : ([] as SearchType[]);

    const participantsSearch = participants
      ? participants.reduce(
          (acc, item) => {
            const nameSearch = generateSearchResponseItem(
              item,
              normalizedText,
              t(`navigation.${Routes.SUMMER_SCHOOL_MAIN}`, { year: year }),
              `/${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_STUDENTS}`,
              date,
              t(`navigation.${Routes.SUMMER_SCHOOL_STUDENTS}`) +
                ': ' +
                item.title
            );
            return [...acc, ...nameSearch];
          },

          [] as SearchType[]
        )
      : ([] as SearchType[]);

    const professorsSearch = professors
      ? professors.reduce(
          (acc, item) => {
            const biographySearch = generateSearchResponseItem(
              item,
              normalizedText,
              t(`navigation.${Routes.SUMMER_SCHOOL_MAIN}`, { year: year }),
              `/${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_PROFESSOR}/${item.slug}`,
              date,
              t(`navigation.${Routes.SUMMER_SCHOOL_PROFESSORS}`) +
                ': ' +
                item.title
            );
            return [...acc, ...biographySearch];
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

  const competitionsSearch = competitions.reduce((acc, competition) => {
    const { description, slug, date, title, junior } = competition;
    const descriptionSearch = generateSearchResponseItem(
      description,
      normalizedText,
      title,
      `/${Routes.COMPETITIONS}/${slug}`,
      date
    );

    const {
      juniorDate,
      juniorConditions,
      juniorJuries,
      juniorTimetable,
      juniorRequirements,
      juniorArtists,
      juniorGuests,
      juniorParticipants,
      juniorPreJury,
    } = junior;

    const juniorPage = `${title}: ${t(`navigation.${Routes.JUNIOR}`)}`;
    const juniorPath = `/${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`;

    const juniorConditionsSearch = generateSearchResponseItem(
      juniorConditions[0],
      normalizedText,
      juniorPage,
      `${juniorPath}/${Routes.GROUP_CONDITIONS}`,
      juniorDate,
      t(`navigation.${Routes.GROUP_CONDITIONS}`)
    );

    const juniorJuriesSearch = juniorJuries
      ? juniorJuries.map((item) => {
          const response = generateSearchResponseItem(
            item,
            normalizedText,
            juniorPage,
            `/${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_JURY}`,
            juniorDate,
            t(`navigation.${Routes.GROUP_JURY}`) + ': ' + item.title
          );
          return response[0];
        })
      : [];

    const juniorTimetableSearch = generateSearchResponseItem(
      juniorTimetable,
      normalizedText,
      juniorPage,
      `${juniorPath}/${Routes.GROUP_TIMETABLE}`,
      juniorDate,
      t(`navigation.${Routes.GROUP_TIMETABLE}`)
    );

    const juniorRequirementsSearch = generateSearchResponseItem(
      juniorRequirements,
      normalizedText,
      juniorPage,
      `${juniorPath}/${Routes.GROUP_REQUIREMENTS}`,
      juniorDate,
      t(`navigation.${Routes.GROUP_REQUIREMENTS}`)
    );

    const juniorArtistsSearch = juniorArtists
      ? juniorArtists.map((item) => {
          const response = generateSearchResponseItem(
            item,
            normalizedText,
            juniorPage,
            `/${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_ORCHESTRA}`,
            juniorDate,
            `${t(`navigation.${Routes.GROUP_ORCHESTRA}`)}: ${item.title}`
          );
          return response[0];
        })
      : [];

    const juniorGuestsSearch = juniorGuests
      ? juniorGuests.map((item) => {
          const response = generateSearchResponseItem(
            item,
            normalizedText,
            juniorPage,
            `/${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_GUESTS}`,
            juniorDate,
            `${t(`navigation.${Routes.GROUP_GUESTS}`)}: ${item.title}`
          );
          return response[0];
        })
      : [];

    const juniorParticipantsSearch = juniorParticipants
      ? juniorParticipants.map((item) => {
          const response = generateSearchResponseItem(
            item,
            normalizedText,
            juniorPage,
            `/${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_PARTICIPANTS}?group=${item.slug}`,
            juniorDate,
            `${t(`navigation.${Routes.GROUP_PARTICIPANTS}`)} (${t(
              `navigation.${item.slug}`
            )}): ${item.title}`
          );
          return response[0];
        })
      : [];

    const juniorPreJurySearch = juniorPreJury
      ? juniorPreJury.map((item) => {
          const response = generateSearchResponseItem(
            item,
            normalizedText,
            juniorPage,
            `/${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_STUDENT_JURY}`,
            juniorDate,
            `${t(`navigation.${Routes.GROUP_STUDENT_JURY}`)}: ${item.title}`
          );
          return response[0];
        })
      : [];

    return [
      ...acc,
      ...descriptionSearch,
      ...juniorConditionsSearch,
      ...juniorJuriesSearch,
      ...juniorTimetableSearch,
      ...juniorRequirementsSearch,
      ...juniorArtistsSearch,
      ...juniorGuestsSearch,
      ...juniorParticipantsSearch,
      ...juniorPreJurySearch,
    ];
  }, [] as SearchType[]);

  const sortingResults = [
    ...masterClassSearch,
    ...newsSearch,
    ...virtuososSearch,
    ...summerSchoolsSearch,
    ...competitionsSearch,
  ].sort((a, b) => {
    if (DateTime.fromISO(a.date) < DateTime.fromISO(b.date)) return 1;
    if (DateTime.fromISO(a.date) == DateTime.fromISO(b.date)) return 0;
    return -1;
  });

  return {
    result: [
      ...administrationSearch,
      ...horowitzSearch,
      ...aboutSearch,
      ...ukrWorksSearch,
      ...visrtuososMainsSearch,
      ...summerSchoolMainsSearch,
      ...sortingResults,
    ],
  };
};

export default useSearchResults;
