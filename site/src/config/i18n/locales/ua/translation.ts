import { Routes } from '@/types/routes.d';
import {
  Buttons,
  Contacts,
  Header,
  InDevelopment,
  KyivGeneva,
  MainPage,
  NotFound,
  Sponsors,
  SummerSchool,
  Virtuosos,
  ETabs,
  EDebut,
} from '@/types/translation.d';

export default {
  navigation: {
    [Routes.HOME]: 'Головна',
    [Routes.ABOUT]: 'Про нас',
    [Routes.DETAILS]: 'Конкурс Горовиця',
    [Routes.ADMINISTRATION]: 'Адміністрація конкурсу',
    [Routes.UKRAINIAN_WORKS]: 'Твори українських композиторів',
    [Routes.KYIV_GENEVA]: 'Конкурс Горовиця Київ-Женева',
    [Routes.HOROWITZ]: 'Володимир Горовиць',
    [Routes.COMPETITIONS]: 'Конкурс',
    [Routes.PROJECTS]: 'Проєкти',
    [Routes.MASTER_CLASS]: 'Майстеркласи',
    [Routes.SUMMER_SCHOOL]: 'Літня музична академія',
    [Routes.SUMMER_SCHOOL_MAIN]: 'Літня музична академія - {{year}} р.',
    [Routes.SUMMER_SCHOOL_CONDITIONS]: 'Умови участі',
    [Routes.SUMMER_SCHOOL_PROFESSORS]: 'Професори',
    [Routes.SUMMER_SCHOOL_PROFESSOR]: 'Професор',
    [Routes.SUMMER_SCHOOL_STUDENTS]: 'Учасники',
    [Routes.SUMMER_SCHOOL_SCHEDULES]: 'Розклад',
    [Routes.SUMMER_SCHOOL_CONCERTS]: 'Концерти',
    [Routes.SUMMER_SCHOOL_PROGRAM]: 'Програма концерту',
    [Routes.SUMMER_SCHOOL_PLACES]: 'Оркестри та локації',
    [Routes.VIRTUOSES]: 'Віртуози планети',
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
    [Routes.JUNIOR]: 'Горовиць-Дебют / Молодша група',
    [Routes.INTERMEDIATE]: 'Середня Група',
    [Routes.SENIOR]: 'Старша група',
    [Routes.GROUP_CONDITIONS]: 'Умови конкурсу',
    [Routes.GROUP_JURY]: 'Журі',
    [Routes.GROUP_PRESELECTION_JURY]: 'Журі відбіркового туру',
    [Routes.GROUP_STUDENT_JURY]: 'Студентське жюрі',
    [Routes.GROUP_TIMETABLE]: 'Регламент проведення конкурсу',
    [Routes.GROUP_PARTICIPANTS]: 'Учасники',
    [Routes.GROUP_REQUIREMENTS]: 'Репертуарні вимоги',
    [Routes.GROUP_REWARDS]: 'Премії',
    [Routes.GROUP_GUESTS]: 'Почесні гості',
    [Routes.GROUP_ORCHESTRA]: 'Оркестр і диригент',
    [Routes.GROUP_VENUES]: 'Локації',
    [Routes.GROUP_WINNERS]: 'Переможці',
    [Routes.GROUP_BOOKLET]: 'Буклет',
    [Routes.GLIERS_ROUNDS]: 'Коло Глієра',
    [ETabs.JUNIOR]: 'Молодша Група',
    [EDebut.GROUP_A]: 'Номінація “А” Elementary',
    [EDebut.GROUP_B]: 'Номінація “B” Elementary',
    [EDebut.GROUP_C]: 'Номінація “C” Advanced',
    [EDebut.GROUP_D]: 'Номінація “D” Advanced',
  },
  buttons: {
    [Buttons.READ_MORE]: 'Читати більше',
    [Buttons.SHOW_MORE]: 'Показати більше',
    [Buttons.SHOW_LESS]: 'Показати менше',
    [Buttons.APPLY]: 'Заявка на участь',
    [Buttons.SUPPORT]: 'Підтримати проєкт',
    [Buttons.VIEW_ALL]: 'Переглянути всіx',
    [Buttons.SHOW_ALL]: 'Переглянути всі',
    [Buttons.WATCH_ONLINE]: 'Дивитись онлайн-трансляцію',
    [Buttons.WATCH_ONLINE_XS]: 'Дивитись трансляцію',
    [Buttons.GO_HOME]: 'На головну сторінку',
    [Buttons.GO_BACK_HOME]: 'Повернутись до Головної сторінки',
    [Buttons.GO_NEWS]: 'Повернутись до Новин',
    [Buttons.GO_BACK]: 'Повернутись назад',
    [Buttons.CONCERT_PROGRAM]: 'Програма концерту',
    [Buttons.DOWNLOAD]: 'Завантажити',
    [Buttons.FROM]: 'з',
    [Buttons.NEXT]: 'Наступна',
    [Buttons.PREV]: 'Попередня',
    [ETabs.DEBUT]: 'Горовиць-Дебют',
    [ETabs.JUNIOR]: 'Молодша Група',
    [EDebut.GROUP_A]: 'А',
    [EDebut.GROUP_B]: 'B',
    [EDebut.GROUP_C]: 'C',
    [EDebut.GROUP_D]: 'D',
  },
  [Header.SEARCH]: {
    placeholder: 'Пошук',
    title: 'За запитом "{{search}}" знайдено {{count}} {{result}}:',
    page: 'Перейти на сторінку "{{page}}"',
  },
  contacts: {
    [Contacts.ADDRESS]: 'Адреса',
    [Contacts.PHONE]: 'Телефон',
    [Contacts.PRESS_CENTER]: 'Прес-центр',
  },

  horowitzPage: {
    literature: 'Література',
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
    [Sponsors.MAIN_PART]: 'Головні партнери',
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

  archive: {
    title: '27 років історії Конкурсу ',
    btn: 'Перейти за посиланням',
  },
  virtuosos: {
    [Virtuosos.NEWS]: 'Останні новини',
  },
  summerSchool: {
    [SummerSchool.TITLE]: 'Літня музична академія',
    [SummerSchool.CONCERTS]: 'Концерти',
    [SummerSchool.CONCERT_PROGRAM]: 'Програма концерту',
    [SummerSchool.ACADEMY]: 'Музична академія',
  },
  seo: {
    title: 'Конкурс Горовиця',
    description:
      ' Міжнародний конкурс є членом Європейської спілки молодіжних музичних конкурсів (EMCY) та входить до складу Всесвітньої федерації міжнародних музичних конкурсів (WFIMC)',
  },
  summerSchoolSchedules: {
    inputNameLabel: 'Ім’я професора / диригента',
    inputNamePlaceholder: 'Оберіть ім’я професора',
    inputDateLabel: 'Дата репетиції',
    notFoundText: 'Нажаль за вашим запитом нічого не знайдено',
    searchResults: 'Результати пошуку',
    showAllSpeaker: 'Показати всіх',
    emptyPageText: "Оберіть ім'я професора та дату",
  },
  age: {
    one: 'рік',
    two: 'роки',
    many: 'років',
  },
  winners: {
    reject: 'Не присуджений',
  },
  masterClass: {
    text: 'На даний момент немає активних подій, які б ви могли відвідати. Слідкуйте за оновленнями на сторінці!',
  },
  glierRound: {
    title: 'Рейнгольд Глієр та українська композиторська школа',
    text: 'Проєкт "РЕЙНГОЛЬД ГЛІЄР ТА УКРАЇНСЬКА КОМПОЗИТОРСЬКА ШКОЛА", представлений тут двома найзнаковішими постатями української музичної культури ХХ століття - Левком Ревуцьким та Борисом Лятошинським, та їх учнями, є лише початком дослідження традицій київської композиторської школи, закладених видатним киянином - композитором-випускником Київського музичного училища Рейнгольдом Глієром. Проєкт знаходиться на етапі розробки та має на меті доповнення інформаційного поля новими постатями. \nУ роботі над проєктом брали участь магістри КМАМ ім. Р. М. Глієра: Євгеній Логвіновський, Марина Кучерява, Альона Савенок, Богдана Бебих. \nМенторки проєкту - Ірина Полстянкіна, Іванна Карабиць \nРедакторка - Світлана Штефан-Антонюк \nДизайн - Вікторія Глива \nКомп\'ютерний дизайн - Анна Прутнік \nКолектив висловлює вдячність викладачеві КМАМ ім. Р.М. Глієра Олексію Войтенку за музикознавчий аналіз представленої інформації.',
    link: 'Більше інформації за посиланням',
  },
};
