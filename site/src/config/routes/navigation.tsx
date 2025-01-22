import { NavigationItemType, Routes, NavItemType } from '@/types/routes.d';

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
      { title: Routes.GLIERS_ROUNDS, slug: Routes.GLIERS_ROUNDS, onlyIn: 'ua' },
    ],
  },
  { title: Routes.NEWS, children: null },
  { title: Routes.CONTACTS, children: null },
];

export const kyivGenevaNavigation: NavItemType[] = [
  { title: Routes.KYIV_GENEVA_CONDITIONS, isActive: true },
  { title: Routes.KYIV_GENEVA_REQUIREMENTS, isActive: true },
  { title: Routes.KYIV_GENEVA_REWARDS, isActive: true },
  { title: Routes.KYIV_GENEVA_JURY, isActive: true },
  { title: Routes.KYIV_GENEVA_SELECTION_JURY, isActive: true },
  { title: Routes.KYIV_GENEVA_ORCHESTRA, isActive: true },
  { title: Routes.KYIV_GENEVA_PARTICIPANTS, isActive: true },
  { title: Routes.KYIV_GENEVA_WINNERS, isActive: true },
  { title: Routes.KYIV_GENEVA_TIMETABLE, isActive: true },
];

export const summerSchoolNavigation: NavItemType[] = [
  {
    title: Routes.SUMMER_SCHOOL_CONDITIONS,
    isActive: false,
  },
  {
    title: Routes.SUMMER_SCHOOL_PROFESSORS,
    isActive: false,
  },

  {
    title: Routes.SUMMER_SCHOOL_STUDENTS,
    isActive: false,
  },
  {
    title: Routes.SUMMER_SCHOOL_SCHEDULES,
    isActive: false,
  },
  {
    title: Routes.SUMMER_SCHOOL_CONCERTS,
    isActive: false,
  },
  {
    title: Routes.SUMMER_SCHOOL_PLACES,
    isActive: false,
  },
];

export const getGroupNavigation = (isJunior: boolean): NavItemType[] => {
  return [
    {
      title: Routes.GROUP_CONDITIONS,
      isActive: false,
    },
    {
      title: Routes.GROUP_JURY,
      isActive: false,
    },
    {
      title: Routes.GROUP_TIMETABLE,
      isActive: false,
    },
    {
      title: Routes.GROUP_REQUIREMENTS,
      isActive: false,
    },
    {
      title: isJunior
        ? Routes.GROUP_STUDENT_JURY
        : Routes.GROUP_PRESELECTION_JURY,
      isActive: false,
    },
    {
      title: Routes.GROUP_PARTICIPANTS,
      isActive: false,
    },
    {
      title: Routes.GROUP_REWARDS,
      isActive: false,
    },
    {
      title: Routes.GROUP_ORCHESTRA,
      isActive: false,
    },
    {
      title: Routes.GROUP_WINNERS,
      isActive: false,
    },
    {
      title: Routes.GROUP_VENUES,
      isActive: false,
    },
    {
      title: Routes.GROUP_GUESTS,
      isActive: false,
    },
    {
      title: Routes.GROUP_BOOKLET,
      isActive: false,
    },
  ];
};

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
