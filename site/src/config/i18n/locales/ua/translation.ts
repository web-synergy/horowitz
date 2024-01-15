import { Routes } from '@/types/routes.d';
import { Translations } from '@/types/translation';

export default {
  navigation: {
    [Routes.HOME]: 'Головна',
    [Routes.ABOUT]: 'Про нас',
    [Routes.DETAILS]: 'Конкурс Горовиця',
    [Routes.ADMINISTRATION]: 'Адміністрація конкурсу',
    [Routes.KYIV_GENEVA]: 'Конкурс Горовиця Київ-Женева',
    [Routes.HOROWITZ]: 'Володимир Горовиць',
    [Routes.COMPETITION]: 'Конкурс',
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
};
