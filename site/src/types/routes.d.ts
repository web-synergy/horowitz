export enum Routes {
  HOME = 'home',
  ABOUT = 'about',
  DETAILS = 'details',
  KYIV_GENEVA = 'kyiv-geneva',
  ARCHIVE = 'archive',
  HOROWITZ = 'horowitz',
  COMPETITION = 'competition',
  PROJECTS = 'projects',
  MASTER_CLASS = 'master-class',
  SUMMER_SCHOOL = 'summer-school',
  VIRTUOSES = 'virtuoses',
  NEWS = 'news',
  CONTACTS = 'contacts',
}

export type NavigationChildrenType = { title: string; slug: string };

export type NavigationItemType = {
  title: Routes;
  children: NavigationChildrenType[] | null;
};
