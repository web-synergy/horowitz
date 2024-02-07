import { TRegulation } from '@/types/kyivGenevaDataTypes';

export const regulationData: TRegulation = {
  ua: [
    {
      title: 'Перший тур',
      rules: [
        '29 учасників.',
        'Тривалість звучання програми 20-25 хвилин.',
        'Вхід вільний.',
      ],
      date: [
        {
          day: `Четвер, 13 квітня 2023`,
          description: [
            `10:30-13:00 зала імені Ференца Ліста. Женевська Консерваторія Перший тур/сесія I.`,
            `18:00-20:00 зала імені Ференца Ліста. Женевська Консерваторія Перший тур/сесія II.`,
          ],
        },
        {
          day: `П'ятниця, 14 квітня 2023`,
          description: [
            `10:30-13:00 зала імені Ференца Ліста. Женевська Консерваторія Перший тур/сесія III.`,
            `18:00-20:00 зала імені Ференца Ліста. Женевська Консерваторія Перший тур/сесія IV.`,
          ],
        },
        {
          day: `Субота, 15 квітня 2023`,
          description: [
            `10:30-13:00 зала імені Ференца Ліста. Женевська Консерваторія Перший тур/сесія V.`,
            `15:00-17:00 зала імені Ференца Ліста. Женевська Консерваторія Перший тур/сесія VI.`,
            `17:30 Консерваторія, фойє 2F Оголошення результатів.`,
          ],
        },
      ],
    },
    {
      title: 'Другий тур',
      rules: [
        'До 15 учасників.',
        'Тривалість звучання програми 35-40 хвилин.',
        'Вхід вільний.',
      ],
      date: [
        {
          day: `Неділя, 16 квітня 2023`,
          description: [
            `10:30-13:30 зала імені Ференца Ліста. Женевська Консерваторія Другий тур/сесія I.`,
            `16:00-19:00 зала імені Ференца Ліста. Женевська Консерваторія Другий тур/сесія II.`,
          ],
        },
        {
          day: `Понеділок, 17 квітня 2023`,
          description: [
            `10:30-13:30 зала імені Ференца Ліста. Женевська Консерваторія Другий тур/сесія III.`,
            `16:00-18:00 зала імені Ференца Ліста. Женевська Консерваторія Другий тур/сесія IV.`,
            `18:30 Консерваторія, фойє 2F Оголошення результатів.`,
          ],
        },
      ],
    },
    {
      title: 'Третій тур',
      rules: [
        'До 9 учасників.',
        'Тривалість звучання програми 50–60 хвилин.',
        'Вхід вільний.',
      ],
      date: [
        {
          day: `Вівторок, 18 квітня 2023`,
          description: [
            `10:30-12:50 зала імені Ференца Ліста. Женевська Консерваторія. Третій тур/ Сесія I.`,
            `16:00-19:40 зала імені Ференца Ліста. Женевська Консерваторія Третій тур/ Сесія II.`,
          ],
        },
        {
          day: `Середа, 19 квітня 2023`,
          description: [
            `10:30-12:50 зала імені Ференца Ліста. Женевська Консерваторія Третій тур/сесія III.`,
            `16:00-18:20 зала імені Ференца Ліста. Женевська Консерваторія Третій тур/сесія IV.`,
            `19:00 Фойє консерваторії 2F Оголошення результатів`,
          ],
        },
      ],
    },
    {
      title: 'Фінальний тур',
      rules: [
        '3 учасника.',
        'Кожен учасник виконує один концерт для фортепіано з оркестром.',
        'Квитки: Billetterie Ville de Genève.',
      ],
      date: [
        {
          day: `П'ятниця, 21 квітня 2023`,
          description: [
            `19:00-21:00 Victoria Hall Фінальний тур.`,
            `21:45 Victoria Hall Оголошення результатів і церемонія нагородження.`,
          ],
        },
      ],
    },
  ],
  en: [
    {
      title: 'First round',
      rules: [
        'Up to 29 Candidates.',
        'Each candidate performs for 20-25 free admission.',
      ],
      date: [
        {
          day: `Thursday, April 13, 2023`,
          description: [
            `10:30-13:00 Salle Franz Liszt First Round/ Session I.`,
            `18:00-20:00 Salle Franz Liszt First Round/ Session II.`,
          ],
        },
        {
          day: `Friday, April 14, 2023`,
          description: [
            `10:30-13:00 Salle Franz Liszt First Round/ Session III.`,
            `18:00-20:00 Salle Franz Liszt First Round/ Session IV.`,
          ],
        },
        {
          day: `Saturday, April 15, 2023`,
          description: [
            `10:30-13:00 Salle Franz Liszt First Round/ Session V.`,
            `15:00-17:00 Salle Franz Liszt First Round/ Session VI.`,
            `17:30 Conservatoire, 2F Foyer Announcement of Results.`,
          ],
        },
      ],
    },
    {
      title: 'Second round.',
      rules: [
        'Up to 15 Candidates.',
        'Each candidate performs for 35-40 minutes.',
        'Free admission.',
      ],
      date: [
        {
          day: `Sunday, April 16, 2023`,
          description: [
            `10:30-13:30 Salle Franz Liszt Second Round/ Session I.`,
            `16:00-19:00 Salle Franz Liszt Second Round/ Session II.`,
          ],
        },
        {
          day: `Monday, April 17, 2023`,
          description: [
            `10:30-13:30 Salle Franz Liszt Second Round/ Session III.`,
            `16:00-18:00 Salle Franz Liszt Second Round/ Session IV.`,
            `18:30 Conservatoire, 2F Foyer Announcement of Results`,
          ],
        },
      ],
    },
    {
      title: 'Third round.',
      rules: [
        'Up to 9 Candidates.',
        'Each candidate performs a recital of 50-60 minutes.',
        'Free admission.',
      ],
      date: [
        {
          day: `Tuesday, April 18, 2023`,
          description: [
            `10:30-12:50 Salle Franz Liszt Third Round/ Session I.`,
            `16:00-19:40 Salle Franz Liszt Third Round/ Session II.`,
          ],
        },
        {
          day: `Wednesday, April 19, 2023`,
          description: [
            `10:30-12:50 Salle Franz Liszt Third Round/ Session III.`,
            `16:00-18:20 Salle Franz Liszt Third Round/ Session IV.`,
            `19:00 Conservatoire 2F Foyer Announcement of Results.`,
          ],
        },
      ],
    },
    {
      title: 'Final round.',
      rules: [
        '3 Finalists.',
        'Each candidate performs one concerto for piano and orchestra.',
        'Tickets: Billetterie Ville de Genève.',
      ],
      date: [
        {
          day: `Friday, April 21, 2023`,
          description: [
            `19:00-21:00 Victoria Hall Final Round.`,
            `21:45 Victoria Hall Announcement of Results and Award Ceremony.`,
            `Tickets: Billetterie Ville de Genève.`,
          ],
        },
      ],
    },
  ],
};
