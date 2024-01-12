import { NavigationItemType, Routes } from '@/types/routes.d';

export const navigation: NavigationItemType[] = [
  // { title: Routes.HOME, children: null },
  {
    title: Routes.ABOUT,
    children: [
      { title: Routes.DETAILS, slug: Routes.DETAILS },
      { title: Routes.HOROWITZ, slug: Routes.HOROWITZ },
    ],
  },
  {
    title: Routes.COMPETITION,
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
