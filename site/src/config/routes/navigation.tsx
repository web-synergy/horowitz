import { NavigationItemType, Routes } from '@/types/routes.d';

export const navigation: NavigationItemType[] = [
  // { title: Routes.HOME, children: null },
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
  { title: Routes.KYIV_GENEVA_JURY },
  { title: Routes.KYIV_GENEVA_PARTICIPANTS },
  { title: Routes.KYIV_GENEVA_REQUIREMENTS },
  { title: Routes.KYIV_GENEVA_SELECTION_JURY },
  { title: Routes.KYIV_GENEVA_WINNERS },
  { title: Routes.KYIV_GENEVA_REWARDS },
  { title: Routes.KYIV_GENEVA_ORCHESTRA },
  { title: Routes.KYIV_GENEVA_TIMETABLE },
];
