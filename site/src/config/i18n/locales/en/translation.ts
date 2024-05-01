import { Routes } from "@/types/routes.d";
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
  Virtuosos,
  SummerSchool,
} from "@/types/translation.d";

export default {
  navigation: {
    [Routes.HOME]: "Home",
    [Routes.ABOUT]: "About Us",
    [Routes.DETAILS]: "Horowitz Competition",
    [Routes.ADMINISTRATION]: "The Competition`s Administration",
    [Routes.UKRAINIAN_WORKS]: "Works by Ukrainian Composers",
    [Routes.KYIV_GENEVA]: "Horowitz Competition Kyiv-Geneva",
    [Routes.HOROWITZ]: "Vladimir Horowitz",
    [Routes.COMPETITIONS]: "Competition",
    [Routes.PROJECTS]: "Projects",
    [Routes.MASTER_CLASS]: "Masterclasses",
    [Routes.SUMMER_SCHOOL]: "Summer Music Academy",
    [Routes.SUMMER_SCHOOL_MAIN]: "Summer Music Academy - {{year}}",
    [Routes.SUMMER_SCHOOL_CONDITIONS]: "Conditions",
    [Routes.SUMMER_SCHOOL_PROFESSORS]: "Professors",
    [Routes.SUMMER_SCHOOL_PROFESSOR]: "Professor",
    [Routes.SUMMER_SCHOOL_STUDENTS]: "Participants",
    [Routes.SUMMER_SCHOOL_SCHEDULES]: "Schedule",
    [Routes.SUMMER_SCHOOL_CONCERTS]: "Concerts",
    [Routes.SUMMER_SCHOOL_PROGRAM]: "Concert's program",
    [Routes.SUMMER_SCHOOL_PLACES]: "Orchestras and venues",
    [Routes.VIRTUOSES]: "Virtuosos of the Planet",
    [Routes.NEWS]: "News",
    [Routes.CONTACTS]: "Contacts",
    [Routes.ARCHIVE]: "Website-archive",
    [Routes.KYIV_GENEVA_CONDITIONS]: "Сonditions",
    [Routes.KYIV_GENEVA_JURY]: "Jury",
    [Routes.KYIV_GENEVA_PARTICIPANTS]: "Participants",
    [Routes.KYIV_GENEVA_REQUIREMENTS]: "Repertoire",
    [Routes.KYIV_GENEVA_SELECTION_JURY]: "Preselection Jury",
    [Routes.KYIV_GENEVA_WINNERS]: "Prizewinners",
    [Routes.KYIV_GENEVA_REWARDS]: "Prizes",
    [Routes.KYIV_GENEVA_ORCHESTRA]: "Artists",
    [Routes.KYIV_GENEVA_TIMETABLE]: "Competition regulations",
    [Routes.JUNIOR]: "Horowitz-Debut/Junior Group (9-15 y. o.)",
    [Routes.INTERMEDIATE]: "Intermediate Group (14-19 y. o.)",
    [Routes.SENIOR]: "Senior Group (16-33 y. o.)",
    [Routes.GROUP_CONDITIONS]: "Conditions",
    [Routes.GROUP_JURY]: "Jury",
    [Routes.GROUP_PRESELECTION_JURY]: "Preselection Jury",
    [Routes.GROUP_STUDENT_JURY]: "Student Jury",
    [Routes.GROUP_TIMETABLE]: "Competition regulations",
    [Routes.GROUP_PARTICIPANTS]: "Participants",
    [Routes.GROUP_REQUIREMENTS]: "Repertoire",
    [Routes.GROUP_REWARDS]: "Prizes",
    [Routes.GROUP_GUESTS]: "Honored guests",
    [Routes.GROUP_ORCHESTRA]: "Artists",
    [Routes.GROUP_VENUES]: "Venues",
    [Routes.GROUP_WINNERS]: "Prizewinners",
    [Routes.GROUP_BOOKLET]: "Booklet",
  },
  buttons: {
    [Buttons.READ_MORE]: "Read more",
    [Buttons.SHOW_MORE]: "Show more",
    [Buttons.SHOW_LESS]: "Show less",
    [Buttons.APPLY]: "Apply now",
    [Buttons.SUPPORT]: "Support us",
    [Buttons.VIEW_ALL]: "View all",
    [Buttons.WATCH_ONLINE]: "Watch online",
    [Buttons.WATCH_ONLINE_XS]: "Watch online",
    [Buttons.GO_HOME]: "Back to Home Page",
    [Buttons.GO_BACK_HOME]: "Back to Home page",
    [Buttons.GO_NEWS]: "Back to News page",
    [Buttons.GO_BACK]: "Go Back",
    [Buttons.CONCERT_PROGRAM]: "Concert program",
  },
  [Header.SEARCH]: "Search",
  contacts: {
    [Contacts.ADDRESS]: "Address",
    [Contacts.PHONE]: "Phone",
    [Contacts.PRESS_CENTER]: "Press-center",
  },

  horowitzPage: {
    literature: "Literature",
  },
  warState: {
    [WarState.TEXT]: "Paused due to the war in Ukraine",
  },
  notFound: {
    [NotFound.TITLE]: "Sorry, the page is not found.",
    [NotFound.TEXT]:
      "The page you are searching for, is deleted or temporary unavailable",
  },
  inDevelopment: {
    [InDevelopment.MSG]: "Sorry, the page is in development.",
  },
  mainPage: {
    [MainPage.NEWS]: "News",
    [MainPage.COMP_EVENTS]: "Competition events",
    [MainPage.WATCH_ONLINE]: "Watch online",
    [MainPage.ORGANIZERS]: "Competition organizers",
    [MainPage.FRIENDS]: "Partners and friends",
  },
  sponsorsPage: {
    [Sponsors.MAIN_TITLE]: "Partners and Friends",
    [Sponsors.COMP_ORG]: "Competition organizers",
    [Sponsors.MAIN_PART]: "General partner",
    [Sponsors.SPONSORS]: "Sponsors",
    [Sponsors.GEN_INFO_PART]: "General Media Partners",
    [Sponsors.PARTNERS]: "Partners",
    [Sponsors.MAIN_INFO_PART]: "Main Media Partners",
    [Sponsors.OFF_INFO_PART]: "Official Media Partners",
  },
  institutional_name:
    "International Competition for Young Pianists in Memory of Vladimir Horowitz",
  kyivGeneva: {
    [KyivGeneva.GOVERNMENT]: "Government agencies",
  },

  archive: {
    title: "27 years of the Competition history",
    btn: "Follow the link",
  },
  virtuosos: {
    [Virtuosos.NEWS]: "Latest news",
  },
  summerSchool: {
    [SummerSchool.TITLE]: "Summer music academy",
    [SummerSchool.CONCERTS]: "Concerts",
    [SummerSchool.CONCERT_PROGRAM]: "Concert program",
    [SummerSchool.ACADEMY]: "Music academy",
  },
  seo: {
    title: "Horowitz competition",
    description:
      "International Competition for Young Pianists in Memory of Vladimir Horowitz is a member of the EMCY and the WFIMC",
  },
  summerSchoolSchedules: {
    inputNameLabel: "Name of Professor/ Conductor",
    inputNamePlaceholder: "Select a professor",
    inputDateLabel: "Date",
    notFoundText: "Unfortunately we can't find any results",
    searchResults: "Results",
    showAllSpeaker: "Show all",
    emptyPageText: "Select the professor's name and date",
  },
};
