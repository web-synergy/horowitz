import lyatoshinskiy from '@/assets/images/rounds/lyatoshinskiy.png';
import revuckiy from '@/assets/images/rounds/revuckiy.jpg';
export interface RoundMemberData {
  name: string;
  group: 1 | 2;
  isBig?: boolean;
  years: string;
  image?: string;
  data?: string;
  shiftY?: number;
  shiftX?: number;
}

export const lyatoshinskiyData: RoundMemberData[] = [
  {
    name: 'Борис Лятошинській',
    group: 1,
    isBig: true,
    years: '1895 – 1968',
    image: lyatoshinskiy,
    shiftY: 2.7,
    shiftX: 0.5,
  },
  {
    name: 'Маркіян Фролов',
    group: 1,
    years: '1892 – 1944',
    shiftX: 0.3,
    shiftY: 0.8,
  },

  {
    name: 'Віктор Дембський',
    group: 1,
    years: '1892 – 1976',
    shiftY: -0.6,
    shiftX: 0.5,
  },

  {
    name: 'Гліб Таранов',
    group: 1,
    years: '1904 – 1989',
    shiftX: 3,
    shiftY: 0.5,
  },

  {
    name: 'Петро Глушков',
    group: 1,
    years: '1889 – 1966',
    shiftX: 1.5,
    shiftY: 2.2,
  },
  {
    name: 'Ігор Белза',
    group: 1,
    years: '1904 – 1994',
    shiftX: 1.1,
    shiftY: 1.8,
  },
  {
    name: 'Роман Верещагін',
    group: 1,
    years: '1910 – 1985',
  },
  {
    name: 'Лев Спасокукоцький',
    group: 1,
    years: '1912 – 1960',
  },
  {
    name: 'Володимир Кирпань',
    group: 1,
    years: '1925 – 1978',
    shiftX: 1.1,
    shiftY: 1.3,
  },
  {
    name: 'Ігор Шамо',
    group: 1,
    years: '1925 – 1982',
    shiftX: 0.8,
    shiftY: 0.2,
  },
  {
    name: 'Валерій Польовий',
    group: 1,
    years: '1927 – 1986',
    shiftX: 1.7,
    shiftY: 1.4,
  },
  {
    name: 'Юрій Щуровський',
    group: 1,
    years: '1927 – 1996',
    shiftX: 1.1,
    shiftY: 1.4,
  },
  {
    name: 'Валентин Пономаренко',
    group: 1,
    years: '1928 – 1984',
    shiftX: 1.1,
    shiftY: 1.3,
  },
  {
    name: 'Георгій Мірецький',
    group: 1,
    years: '1929 – 1978',
  },
  {
    name: 'Владлен Лукашов',
    group: 1,
    years: '1930 – 2003',
  },
  {
    name: 'Ніна Матусевич',
    group: 1,
    years: '1931 – 1988',
  },
  {
    name: 'Олександр Канерштейн',
    group: 1,
    years: '1933 – 2006',
  },
  {
    name: 'Леонід Грабовський',
    group: 1,
    years: '1935 р. н.',
  },
  {
    name: 'Микола Полоз',
    group: 1,
    years: '1936 – 2016',
    shiftX: 1.2,
  },
  {
    name: 'Віталій Пацера',
    group: 1,
    years: '1936 – 2022',
    shiftX: 1.2,
  },
  {
    name: 'Віталій Годзяцький',
    group: 1,
    years: '1936 р. н.',
    shiftX: 1.2,
  },
  {
    name: 'Валентин Сильвестров',
    group: 1,
    years: '1937 р. н.',
    shiftX: 1.1,
  },
  {
    name: 'Йонас Балаускас',
    group: 1,
    years: '1937 р. н.',
    shiftX: 0.9,
  },
  {
    name: 'Володимир Губа',
    group: 1,
    years: '1938 – 2020',
    shiftX: 0.9,
  },
  {
    name: 'Леся Дичко',
    group: 1,
    years: '1939 р. н.',
    shiftX: 0.9,
  },
  {
    name: 'Євген Станкович',
    group: 1,
    years: '1942 р. н.',
  },
  {
    name: 'Володимир Загорцев',
    group: 1,
    years: '(1944 – 2010)',
  },
  {
    name: 'Іван Карабиць',
    group: 1,
    years: '(1945 – 2002)',
  },
];

export const revuckiyData: RoundMemberData[] = [
  {
    name: 'Тетяна Гусарчук',
    group: 2,
    years: '1957 р.н.',
    shiftY: 0.3,
    shiftX: 0.7,
  },

  {
    name: 'Левко Ревуцький',
    group: 2,
    isBig: true,
    years: '1895-1968',
    image: revuckiy,
    shiftY: 0.5,
    shiftX: 1.5,
  },
  {
    name: 'Яків Цегляр',
    group: 2,
    years: '1912-2008',
    shiftY: 0.6,
    shiftX: 1.3,
  },
  {
    name: 'Михайло Бялик',
    group: 2,
    years: '1929-2022',
    shiftY: 0.6,
    shiftX: 1.3,
  },
  {
    name: 'Аркадій Філіпенко',
    group: 2,
    years: '1912-1983',
    shiftY: 1,
    shiftX: 0.8,
  },

  {
    name: 'Ольга Шевчук',
    group: 2,
    years: '1959 р.н.',
    shiftY: 1,
    shiftX: 0.4,
  },

  {
    name: 'Яків Губанов',
    group: 2,
    years: '1954 р.н.',
    shiftY: 0.8,
    shiftX: 0.1,
  },

  {
    name: 'Олександр Левич',
    group: 2,
    years: '1907-1994',
    shiftY: -0.1,
    shiftX: 1.2,
  },

  {
    name: 'Євген Юцевич',
    group: 2,
    years: '1901-1988',
    shiftY: 0.3,
    shiftX: 1.3,
  },
  {
    name: 'Ісаак Паїн',
    group: 2,
    years: '1912-1999',
    shiftY: 0.3,
    shiftX: 1.3,
  },
  {
    name: 'Ніна Герасимова-Персидська',
    group: 2,
    years: '1927-2020',
    shiftY: 0.6,
    shiftX: 1.3,
  },

  {
    name: 'Ян Левін',
    group: 2,
    years: '1912-1942',
    shiftY: 0.5,
    shiftX: 1.2,
  },
  {
    name: 'Людмила Левітова',
    group: 2,
    years: '1926-1991',
    shiftY: 0.3,
    shiftX: 1.4,
  },

  {
    name: 'Михайло Іжакевич',
    group: 2,
    years: '1909-1975',
    shiftY: 0.6,
    shiftX: 0.9,
  },
  {
    name: 'Віталій Кирейко',
    group: 2,
    years: '1926-2016',
    shiftY: 0.6,
    shiftX: 0.9,
  },

  {
    name: 'Ігор Хуторянський',
    group: 2,
    years: '1924 р.н.',
    shiftY: 0.6,
    shiftX: 0.9,
  },
  {
    name: 'Богдана Фільц',
    group: 2,
    years: '1932-2021',
    shiftY: 0.7,
    shiftX: 0.8,
  },

  {
    name: 'Анатолій Свечніков',
    group: 2,
    years: '1908-1962',
    shiftY: 0.6,
    shiftX: 0.8,
  },
  {
    name: 'Леонід Грабовський',
    group: 2,
    years: '1935 р.н.',
    shiftY: 0.6,
    shiftX: 1.4,
  },

  {
    name: 'Валерій Подвала',
    group: 2,
    years: '1932-2003',
    shiftY: 0.6,
    shiftX: 1.4,
  },

  {
    name: 'Юрій Фіала',
    group: 2,
    years: '1922-2017',
    shiftY: 0.6,
    shiftX: 1.4,
  },
  {
    name: 'Георгій Мірецький',
    group: 2,
    years: '1929-1978',
    shiftY: 0.8,
    shiftX: 1.2,
  },
  {
    name: 'Олександр-Зносько-Боровський',
    group: 2,
    years: '1908-1983',
    shiftY: 1.1,
    shiftX: 1.2,
  },

  {
    name: 'Наум Лапинський',
    group: 2,
    years: '1900-1960',
  },

  {
    name: 'Костянтин Скороход',
    group: 2,
    years: '1921-1991',
  },
  {
    name: 'Герман Жуковський',
    group: 2,
    years: '1913-1976',
  },

  {
    name: 'Ікрам Акбаров',
    group: 2,
    years: '1921-2011',
  },

  {
    name: 'Всеволод Рождественський',
    group: 2,
    years: '1918-1985',
  },

  {
    name: 'Вадим Гомоляка',
    group: 2,
    years: '1914-1980',
  },

  {
    name: 'Яків Лапинський',
    group: 2,
    years: '1928-2020',
  },
  {
    name: 'Микола Чайкін',
    group: 2,
    years: '1915-2000',
  },

  {
    name: 'Григорій Майборода',
    group: 2,
    years: '1913-1992',
  },

  {
    name: 'Сергій Жданов',
    group: 2,
    years: '1907-1968',
  },

  {
    name: 'Олена Андреєва',
    group: 2,
    years: '1914-2007',
  },
  {
    name: 'Костянтин Шипович',
    group: 2,
    years: '1907-1942',
  },
  {
    name: 'Фріда Аерова',
    group: 2,
    years: '1916-1990',
  },
  {
    name: 'Платон Майборода',
    group: 2,
    years: '1918-1998',
  },
  {
    name: 'Анатолій Коломієць',
    group: 2,
    years: '1918-1997',
  },
  {
    name: 'Микола Дремлюга',
    group: 2,
    years: '1917-1998',
  },
  {
    name: 'Ібрагім Хамраєв',
    group: 2,
    years: '1916-1999',
  },
];
