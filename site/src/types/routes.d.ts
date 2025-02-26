export enum Routes {
  HOME = 'home',
  ABOUT = 'about',
  DETAILS = 'details',
  ADMINISTRATION = 'administration',
  ARCHIVE = 'archive',
  UKRAINIAN_WORKS = 'ukrainian-works',
  HOROWITZ = 'horowitz',
  COMPETITIONS = 'competitions',
  COMPETITION = 'competition',
  PROJECTS = 'projects',
  MASTER_CLASS = 'master-class',
  CURRENT_MASTER_CLASS = `${MASTER_CLASS}/:slug`,
  VIRTUOSES = 'virtuosos',
  VIRTUOSES_ARTICLE = `${VIRTUOSES}/article`,
  VIRTUOSES_CURRENT_ARTICLE = `${VIRTUOSES_ARTICLE}/:slug`,
  NEWS = 'news',
  CURRENT_NEWS = `${NEWS}/:slug`,
  CONTACTS = 'contacts',
  KYIV_GENEVA = 'kyiv-geneva',
  KYIV_GENEVA_CONDITIONS = 'kg-conditions',
  KYIV_GENEVA_JURY = 'kg-jury',
  KYIV_GENEVA_PARTICIPANTS = 'kg-participants',
  KYIV_GENEVA_REQUIREMENTS = 'kg-requirements',
  KYIV_GENEVA_SELECTION_JURY = 'kg-preselection-jury',
  KYIV_GENEVA_WINNERS = 'kg-winners',
  KYIV_GENEVA_REWARDS = 'kg-rewards',
  KYIV_GENEVA_ORCHESTRA = 'kg-orchestra',
  KYIV_GENEVA_TIMETABLE = 'kg-timetable',
  KYIV_GENEVA_SPONSORS = 'kg-sponsors',
  KYIV_GENEVA_WFIMC = 'wfimc',
  SPONSORS = 'sponsors',
  APPLY = 'apply',
  SUPPORT = 'support',
  SUMMER_SCHOOL = 'summer-school',
  SUMMER_SCHOOL_MAIN = 'sa-name',
  SUMMER_SCHOOL_CONDITIONS = 'sa-conditions',
  SUMMER_SCHOOL_PROFESSORS = 'sa-professors',
  SUMMER_SCHOOL_PROFESSOR = 'sa-professor/:key',
  SUMMER_SCHOOL_STUDENTS = 'sa-participants',
  SUMMER_SCHOOL_SCHEDULES = 'sa-schedules',
  SUMMER_SCHOOL_CONCERTS = 'sa-concerts',
  SUMMER_SCHOOL_CURRENT_CONCERTS = `${SUMMER_SCHOOL_CONCERTS}/:key`,
  SUMMER_SCHOOL_PROGRAM = 'sa-program',
  SUMMER_SCHOOL_PLACES = 'sa-places',
  JUNIOR = 'junior-group',
  INTERMEDIATE = 'intermediate',
  SENIOR = 'senior',
  GROUP_CONDITIONS = 'conditions',
  GROUP_JURY = 'jury',
  GROUP_TIMETABLE = 'timetable',
  GROUP_REQUIREMENTS = 'requirements',
  GROUP_STUDENT_JURY = 'student-jury',
  GROUP_PRESELECTION_JURY = 'preselection-jury',
  GROUP_PARTICIPANTS = 'participants',
  GROUP_REWARDS = 'rewards',
  GROUP_ORCHESTRA = 'orchestra',
  GROUP_WINNERS = 'winners',
  GROUP_VENUES = 'venues',
  GROUP_GUESTS = 'guests',
  GROUP_BOOKLET = 'booklet',
  SEARCH = 'search',
  GLIERS_ROUNDS = 'gliers-rounds',
}

export type NavigationType = {
  title: string;
  slug: string;
  onlyIn?: 'ua' | 'en';
};

export type NavigationItemType = {
  title: Routes;
  children: NavigationType[] | null;
};

export type NavItemType = {
  title: string;
  isActive: boolean;
};
