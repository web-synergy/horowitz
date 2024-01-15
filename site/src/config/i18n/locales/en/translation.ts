import { Routes } from '@/types/routes.d'
import { Translations } from '@/types/translation.d'

export default {
  navigation: {
    [Routes.HOME]: 'Home',
    [Routes.ABOUT]: 'About Us',
    [Routes.DETAILS]: 'Horowitz Competition',
    [Routes.ADMINISTRATION]: 'Administrative Group',
    [Routes.KYIV_GENEVA]: 'Horowitz Competition Kyiv-Geneva',
    [Routes.HOROWITZ]: 'Vladimir Horowitz',
    [Routes.COMPETITION]: 'Competitions',
    [Routes.PROJECTS]: 'Projects',
    [Routes.MASTER_CLASS]: 'Masterclasses',
    [Routes.SUMMER_SCHOOL]: 'Summer Music Academy',
    [Routes.VIRTUOSES]: 'Virtuosos of the Planet',
    [Routes.NEWS]: 'News',
    [Routes.CONTACTS]: 'Contacts',
    [Routes.ARCHIVE]: 'Website-archive',
  },
  [Translations.SEARCH]: 'Search',
  contacts: {
    address: 'Address',
    phone: 'Phone',
    pressCenter: 'Press-center',
  },
  institutional_name: 'International Competition for Young Pianists in Memory of Vladimir Horowitz',
}
