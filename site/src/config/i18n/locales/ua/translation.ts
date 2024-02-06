import { Routes } from '@/types/routes.d';
import {
  InDevelopment,
  MainPage,
  NotFound,
  Sponsors,
  Translations,
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
  },
  [Translations.SEARCH]: 'Пошук',
  contacts: {
    address: 'Адреса',
    phone: 'Телефон',
    pressCenter: 'Прес-центр',
  },
  news: {
    goBack: 'Повернутись до Новин',
    readMore: 'Читати більше',
    showMore: 'Показати більше',
  },
  horowitzPage: {
    literature: 'Література',
    showMore: 'Показати більше',
  },
  warStatePlaceholder: {
    message: 'Призупинено через війну в Україні',
    backToHomeBtn: 'На головну сторінку',
  },
  notFound: {
    [NotFound.TITLE]: 'Вибачте, сторінку не знайдено',
    [NotFound.TEXT]:
      'Сторінка, яку ви шукаєте, видалена або тимчасово недоступна',
    [NotFound.BTN]: 'На головну сторінку',
  },
  inDevelopment: {
    [InDevelopment.MSG]:
      'Вибачте, на даний момент ця сторінка знаходиться в розробці',
    [InDevelopment.BTN]: 'На головну сторінку',
  },
  mainPage: {
    [MainPage.BTN_APL]: 'Заявка на участь',
    [MainPage.BTN_SUPP]: 'Підтримати проєкт',
    [MainPage.BTN_VIEW]: 'Переглянути всі',
    [MainPage.BTN_READ]: 'Читати більше',
    [MainPage.NEWS]: 'Новини',
    [MainPage.COMP_EVENTS]: 'Події конкурсу',
    [MainPage.WATCH_ONLINE]: 'Дивитись онлайн-трансляцію',
    [MainPage.WATCH_ONLINE_XS]: 'Дивитись трансляцію',
    [MainPage.ORGANIZERS]: 'Організатори конкурсу',
    [MainPage.FRIENDS]: 'Партнери та друзі',
    [MainPage.BTN_SHOW]: 'Переглянути всіх',
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
    [Sponsors.BTN_GO_BACK]: ' Повернутись до Головної сторінки',
  },
  institutional_name:
    'Міжнародний конкурс молодих піаністів памʼяті Володимира Горовиця',
  kyivGeneva: {
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
  jury: {
    title: 'Жюрі',
    read_more: 'Читати більше',
  },
};
