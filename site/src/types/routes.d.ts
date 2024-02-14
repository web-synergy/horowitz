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
  SUMMER_SCHOOL = 'summer-school',
  VIRTUOSES = 'virtuosos',
  VIRTUOSES_ARTICLE = `${VIRTUOSES}/article`,
  VIRTUOSES_CURRENT_ARTICLE = `${VIRTUOSES_ARTICLE}/:slug`,
  NEWS = 'news',
  CURRENT_NEWS = `${NEWS}/:slug`,
  CONTACTS = 'contacts',
  KYIV_GENEVA = 'kyiv-geneva',
  KYIV_GENEVA_CONDITIONS = 'conditions',
  KYIV_GENEVA_JURY = 'jury',
  KYIV_GENEVA_PARTICIPANTS = 'participants',
  KYIV_GENEVA_REQUIREMENTS = 'requirements',
  KYIV_GENEVA_SELECTION_JURY = 'preselection-jury',
  KYIV_GENEVA_WINNERS = 'winners',
  KYIV_GENEVA_REWARDS = 'rewards',
  KYIV_GENEVA_ORCHESTRA = 'orchestra',
  KYIV_GENEVA_TIMETABLE = 'timetable',
  KYIV_GENEVA_SPONSORS = 'kg-sponsors',
  KYIV_GENEVA_WFIMC = 'wfimc',
  SPONSORS = 'sponsors',
  APPLY = 'apply',
  SUPPORT = 'support',
}

export type NavigationType = { title: string; slug: string };

export type NavigationItemType = {
  title: Routes;
  children: NavigationType[] | null;
};
