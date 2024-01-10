import { Routes } from '../../types/routes';

export const navigation = {
  [Routes.HOME]: {
    children: null,
  },
  [Routes.ABOUT]: {
    children: [
      { title: Routes.DETAILS },
      { title: Routes.KYIV_GENEVA },
      { title: Routes.HOROWITZ },
    ],
  },
  [Routes.COMPETITION]: {
    children: [],
  },
  [Routes.PROJECTS]: {
    children: [
      { title: Routes.MASTER_CLASS },
      { title: Routes.SUMMER_SCHOOL },
      { title: Routes.VIRTUOSES },
    ],
  },
  [Routes.NEWS]: {
    children: null,
  },
  [Routes.CONTACTS]: {
    children: null,
  },
};

export const mainNavigation = Object.keys(navigation);
