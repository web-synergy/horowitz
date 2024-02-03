export enum Routes {
  HOME = 'home',
  ABOUT = 'about',
  DETAILS = 'details',
  ADMINISTRATION = 'administration',
  ARCHIVE = 'archive',
  HOROWITZ = 'horowitz',
  COMPETITIONS = 'competitions',
  COMPETITION = 'competition',
  PROJECTS = 'projects',
  MASTER_CLASS = 'master-class',
  SUMMER_SCHOOL = 'summer-school',
  VIRTUOSES = 'virtuoses',
  NEWS = 'news',
  CURRENT_NEWS = `${NEWS}/:slug`,
  CONTACTS = 'contacts',
  KYIV_GENEVA = 'kyiv-geneva',
  KYIV_GENEVA_CONDITIONS = 'conditions',
  KYIV_GENEVA_JURY = 'jury',
  KYIV_GENEVA_PARTICIPANTS = 'participants',
  KYIV_GENEVA_REQUIREMENTS = 'requirements',
  KYIV_GENEVA_SELECTION_JURY = 'selection_jury',
  KYIV_GENEVA_WINNERS = 'winners',
  KYIV_GENEVA_REWARDS = 'rewards',
  KYIV_GENEVA_ORCHESTRA = 'orchestra',
  KYIV_GENEVA_TIMETABLE = 'timetable',
  SPONSORS = 'sponsors',
}

export type NavigationChildrenType = { title: string; slug: string }

export type NavigationItemType = {
  title: Routes
  children: NavigationChildrenType[] | null
}
