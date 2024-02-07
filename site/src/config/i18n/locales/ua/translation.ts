import { Routes } from '@/types/routes.d';
import {
  InDevelopment,
  KyivGeneva,
  MainPage,
  NotFound,
  Sponsors,
  Header,
  Contacts,
  Buttons,
  WarState,
} from '@/types/translation.d';

export default {
  navigation: {
    [Routes.HOME]: 'Головна',
    [Routes.ABOUT]: 'Про нас',
    [Routes.DETAILS]: 'Конкурс Горовиця',
    [Routes.ADMINISTRATION]: 'Адміністрація конкурсу',
    [Routes.KYIV_GENEVA]: 'Конкурс Горовиця Київ-Женева',
    [Routes.HOROWITZ]: 'Володимир Горовиць',
    [Routes.COMPETITIONS]: 'Конкурс',
    [Routes.PROJECTS]: 'Проєкти',
    [Routes.MASTER_CLASS]: 'Майстеркласи',
    [Routes.SUMMER_SCHOOL]: 'Літня музична академія',
    [Routes.VIRTUOSES]: 'Віртуоза планети',
    [Routes.NEWS]: 'Новини',
    [Routes.CONTACTS]: 'Контакти',
    [Routes.ARCHIVE]: 'Сайт-архів',
    [Routes.KYIV_GENEVA_CONDITIONS]: 'Умови конкурсу',
    [Routes.KYIV_GENEVA_JURY]: 'Журі',
    [Routes.KYIV_GENEVA_PARTICIPANTS]: 'Учасники',
    [Routes.KYIV_GENEVA_REQUIREMENTS]: 'Репертуарні вимоги',
    [Routes.KYIV_GENEVA_SELECTION_JURY]: 'Журі відбіркового туру',
    [Routes.KYIV_GENEVA_WINNERS]: 'Переможці',
    [Routes.KYIV_GENEVA_REWARDS]: 'Нагороди',
    [Routes.KYIV_GENEVA_ORCHESTRA]: 'Оркестр і диригент',
    [Routes.KYIV_GENEVA_TIMETABLE]: 'Регламент проведення конкурсу',
  },
  buttons: {
    [Buttons.READ_MORE]: 'Читати більше',
    [Buttons.SHOW_MORE]: 'Показати більше',
    [Buttons.APPLY]: 'Заявка на участь',
    [Buttons.SUPPORT]: 'Підтримати проєкт',
    [Buttons.VIEW_ALL]: 'Переглянути всі',
    [Buttons.WATCH_ONLINE]: 'Дивитись онлайн-трансляцію',
    [Buttons.WATCH_ONLINE_XS]: 'Дивитись трансляцію',
    [Buttons.GO_HOME]: 'На головну сторінку',
    [Buttons.GO_BACK_HOME]: 'Повернутись до Головної сторінки',
    [Buttons.GO_NEWS]: 'Повернутись до Новин',
    [Buttons.GO_KYIV_GENEVA]: 'Повернутись до Конкурс Горовиця Київ-Женева',
    [Buttons.GO_KG_JURY]: 'Повернутись до Журі',
    [Buttons.GO_KG_SEL_JURY]: 'Повернутись до Журі відбіркового туру',
  },
  [Header.SEARCH]: 'Пошук',
  contacts: {
    [Contacts.ADDRESS]: 'Адреса',
    [Contacts.PHONE]: 'Телефон',
    [Contacts.PRESS_CENTER]: 'Прес-центр',
  },

  horowitzPage: {
    literature: 'Література',
  },
  warState: {
    [WarState.TEXT]: 'Призупинено через війну в Україні',
  },
  notFound: {
    [NotFound.TITLE]: 'Вибачте, сторінку не знайдено',
    [NotFound.TEXT]:
      'Сторінка, яку ви шукаєте, видалена або тимчасово недоступна',
  },
  inDevelopment: {
    [InDevelopment.MSG]:
      'Вибачте, на даний момент ця сторінка знаходиться в розробці',
  },
  mainPage: {
    [MainPage.NEWS]: 'Новини',
    [MainPage.COMP_EVENTS]: 'Події конкурсу',
    [MainPage.WATCH_ONLINE]: 'Дивитись онлайн',
    [MainPage.ORGANIZERS]: 'Організатори конкурсу',
    [MainPage.FRIENDS]: 'Партнери та друзі',
  },
  sponsorsPage: {
    [Sponsors.MAIN_TITLE]: 'Партнери і друзі',
    [Sponsors.COMP_ORG]: 'Організатори конкурсу',
    [Sponsors.MAIN_PART]: 'Головний партнер',
    [Sponsors.SPONSORS]: 'Спонсори',
    [Sponsors.GEN_INFO_PART]: 'Головні інформаційні партнери',
    [Sponsors.PARTNERS]: 'Партнери',
    [Sponsors.MAIN_INFO_PART]: 'Головні інформаційні партнери',
    [Sponsors.OFF_INFO_PART]: 'Офіційні інформаційні партнери',
  },
  institutional_name:
    'Міжнародний конкурс молодих піаністів памʼяті Володимира Горовиця',
  kyivGeneva: {
    [KyivGeneva.GOVERNMENT]: 'Державні установи',
  },
  jury: {
    return_jury: 'Повернутись до Журі',
  },
};
