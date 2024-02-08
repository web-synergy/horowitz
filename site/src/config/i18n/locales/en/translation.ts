import { Routes } from '@/types/routes.d';
import {
  InDevelopment,
  MainPage,
  NotFound,
  Header,
  Sponsors,
  KyivGeneva,
  Contacts,
  Buttons,
  WarState,
} from '@/types/translation.d';

export default {
  navigation: {
    [Routes.HOME]: 'Home',
    [Routes.ABOUT]: 'About Us',
    [Routes.DETAILS]: 'Horowitz Competition',
    [Routes.ADMINISTRATION]: 'Administrative Group',
    [Routes.KYIV_GENEVA]: 'Horowitz Competition Kyiv-Geneva',
    [Routes.HOROWITZ]: 'Vladimir Horowitz',
    [Routes.COMPETITIONS]: 'Competitions',
    [Routes.PROJECTS]: 'Projects',
    [Routes.MASTER_CLASS]: 'Masterclasses',
    [Routes.SUMMER_SCHOOL]: 'Summer Music Academy',
    [Routes.VIRTUOSES]: 'Virtuosos of the Planet',
    [Routes.NEWS]: 'News',
    [Routes.CONTACTS]: 'Contacts',
    [Routes.ARCHIVE]: 'Website-archive',
    [Routes.KYIV_GENEVA_CONDITIONS]: 'Competition Rules',
    [Routes.KYIV_GENEVA_JURY]: 'The Jury',
    [Routes.KYIV_GENEVA_PARTICIPANTS]: 'Participants',
    [Routes.KYIV_GENEVA_REQUIREMENTS]: 'Repertoire',
    [Routes.KYIV_GENEVA_SELECTION_JURY]: 'Preselection Jury',
    [Routes.KYIV_GENEVA_WINNERS]: 'Prizewinners',
    [Routes.KYIV_GENEVA_REWARDS]: 'Prizes',
    [Routes.KYIV_GENEVA_ORCHESTRA]: 'Artists',
    [Routes.KYIV_GENEVA_TIMETABLE]: 'Competition Schedule',
  },
  buttons: {
    [Buttons.READ_MORE]: 'Read more',
    [Buttons.SHOW_MORE]: 'Show more',
    [Buttons.APPLY]: 'Apply now',
    [Buttons.SUPPORT]: 'Support us',
    [Buttons.VIEW_ALL]: 'View all',
    [Buttons.WATCH_ONLINE]: 'Watch online',
    [Buttons.WATCH_ONLINE_XS]: 'Watch online',
    [Buttons.GO_HOME]: 'Back to Home Page',
    [Buttons.GO_BACK_HOME]: 'Back to Home page',
    [Buttons.GO_NEWS]: 'Back to News page',
    [Buttons.GO_KYIV_GENEVA]: 'Go Back',
    [Buttons.GO_KG_JURY]: 'Back to Jury',
    [Buttons.GO_KG_SEL_JURY]: 'Back to Selection Jury',
  },
  [Header.SEARCH]: 'Search',
  contacts: {
    [Contacts.ADDRESS]: 'Address',
    [Contacts.PHONE]: 'Phone',
    [Contacts.PRESS_CENTER]: 'Press-center',
  },

  horowitzPage: {
    literature: 'Literature',
  },
  warState: {
    [WarState.TEXT]: 'Paused due to the war in Ukraine',
  },
  notFound: {
    [NotFound.TITLE]: 'Sorry, the page is not found.',
    [NotFound.TEXT]:
      'The page you are searching for, is deleted or temporary unavailable',
  },
  inDevelopment: {
    [InDevelopment.MSG]: 'Sorry, the page is in development.',
  },
  mainPage: {
    [MainPage.NEWS]: 'News',
    [MainPage.COMP_EVENTS]: 'Competition events',
    [MainPage.WATCH_ONLINE]: 'Watch online',
    [MainPage.ORGANIZERS]: 'Competition organizers',
    [MainPage.FRIENDS]: 'Partners and friends',
  },
  sponsorsPage: {
    [Sponsors.MAIN_TITLE]: 'Partners and friends',
    [Sponsors.COMP_ORG]: 'Competition organizers',
    [Sponsors.MAIN_PART]: 'Main partner',
    [Sponsors.SPONSORS]: 'Sponsors',
    [Sponsors.GEN_INFO_PART]: 'General information partners',
    [Sponsors.PARTNERS]: 'Partners',
    [Sponsors.MAIN_INFO_PART]: 'Main information partners',
    [Sponsors.OFF_INFO_PART]: 'Official information partners',
  },
  institutional_name:
    'International Competition for Young Pianists in Memory of Vladimir Horowitz',
  kyivGeneva: {
    [KyivGeneva.GOVERNMENT]: 'Government agencies',
  },
};
