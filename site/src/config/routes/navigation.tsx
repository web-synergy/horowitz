import { NavigationItemType, Routes } from '@/types/routes.d';

export const navigation: NavigationItemType[] = [
  {
    title: Routes.ABOUT,
    children: [
      { title: Routes.DETAILS, slug: Routes.DETAILS },
      { title: Routes.HOROWITZ, slug: Routes.HOROWITZ },
      { title: Routes.ADMINISTRATION, slug: Routes.ADMINISTRATION },
    ],
  },
  {
    title: Routes.COMPETITIONS,
    children: [
      {
        title: Routes.UKRAINIAN_WORKS,
        slug: Routes.UKRAINIAN_WORKS,
      },
      { title: Routes.KYIV_GENEVA, slug: Routes.KYIV_GENEVA },
      {
        title: Routes.ARCHIVE,
        slug: Routes.ARCHIVE,
      },
    ],
  },
  {
    title: Routes.PROJECTS,
    children: [
      { title: Routes.MASTER_CLASS, slug: Routes.MASTER_CLASS },
      { title: Routes.SUMMER_SCHOOL, slug: Routes.SUMMER_SCHOOL },
      { title: Routes.VIRTUOSES, slug: Routes.VIRTUOSES },
    ],
  },
  { title: Routes.NEWS, children: null },
  { title: Routes.CONTACTS, children: null },
];

export const kyivGenevaNavigation = [
  { title: Routes.KYIV_GENEVA_CONDITIONS },
  { title: Routes.KYIV_GENEVA_REQUIREMENTS },
  { title: Routes.KYIV_GENEVA_REWARDS },
  { title: Routes.KYIV_GENEVA_JURY },
  { title: Routes.KYIV_GENEVA_SELECTION_JURY },
  { title: Routes.KYIV_GENEVA_ORCHESTRA },
  { title: Routes.KYIV_GENEVA_PARTICIPANTS },
  { title: Routes.KYIV_GENEVA_WINNERS },
  { title: Routes.KYIV_GENEVA_TIMETABLE },
];

export const summerSchoolNavigation = [
  {
    title: Routes.SUMMER_SCHOOL_CONDITIONS,
  },
  {
    title: Routes.SUMMER_SCHOOL_PROFESSORS,
  },

  {
    title: Routes.SUMMER_SCHOOL_STUDENTS,
  },
  {
    title: Routes.SUMMER_SCHOOL_SCHEDULES,
  },
  {
    title: Routes.SUMMER_SCHOOL_CONCERTS,
  },
  {
    title: Routes.SUMMER_SCHOOL_PLACES,
  },
];

type Navigate = { title: string; parent: string | null };

export const overallNavigation = navigation.reduce(
  (acc, { title, children }) => {
    const mainElement = { title: title, parent: null };
    acc.push(mainElement);
    if (children) {
      children.forEach((item) => {
        const element = { title: item.title, parent: title };
        acc.push(element);
      });
    }
    return acc;
  },
  [] as Navigate[]
);
