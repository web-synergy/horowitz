import { Routes } from '@/types/routes.d'
import { InDevelopment, NotFound, Translations } from '@/types/translation.d'

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
  notFound: {
    [NotFound.TITLE]: 'Sorry, the page is not found.',
    [NotFound.TEXT]: 'The page you are searching for, is deleted or temporary unavailable',
    [NotFound.BTN]: 'Back to Home Page',
  },
  inDevelopment: {
    [InDevelopment.MSG]: 'Sorry, the page is in development.',
    [InDevelopment.BTN]: 'Back to Home Page',
  },
  institutional_name: 'International Competition for Young Pianists in Memory of Vladimir Horowitz',
}
