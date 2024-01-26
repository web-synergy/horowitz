import { Routes } from '@/types/routes.d'
import { InDevelopment, MainPage, NotFound, Translations } from '@/types/translation.d'

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
  news: {
    goBack: 'Back to news',
    readMore: 'Read more',
    showMore: 'Show more',
  },
  horowitzPage: {
    literature: 'Literature',
    showMore: 'Show more',
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
  mainPage: {
    [MainPage.BTN_APL]: 'Application form',
    [MainPage.BTN_SUPP]: 'Support the project',
    [MainPage.BTN_VIEW]: 'View all',
    [MainPage.BTN_READ]: 'Read more',
    [MainPage.NEWS]: 'News',
    [MainPage.COMP_EVENTS]: 'Competition events',
    [MainPage.WATCH_ONLINE]: 'Watch online',
    [MainPage.WATCH_ONLINE_XS]: 'Watch online',
    [MainPage.ORGANIZERS]: 'Competition organizers',
  },
  institutional_name: 'International Competition for Young Pianists in Memory of Vladimir Horowitz',
}
