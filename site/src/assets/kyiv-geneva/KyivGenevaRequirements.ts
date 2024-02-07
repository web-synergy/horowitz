import { TRequirements } from '@/types/kyivGenevaDataTypes';

export const requirementsData: TRequirements = {
  ua: {
    qualifyingRound: {
      title: 'Відбірковий тур',
      list: [
        'Учасники мають виконати програму тривалістю приблизно 15 хвилин. Програма повинна включати:',
        '•Один віртуозний етюд;',
        '•Один або кілька творів, обраних учасником.',
      ],
    },

    firstRound: {
      title: 'Перший тур',
      p: `Учасники мають виконати програму тривалістю приблизно 20–25 хвилин. Програма
повинна включати:`,
      list: [
        `•Один етюд із переліку за вибором учасника:
        Ф. Шопен, Ф. Ліст, К. Дебюссі, Д. Лігеті, К. Сен-Санс, Ф. Мендельсон тв. 104, В. Косенко «11
        етюдів у формі старовинних танців» тв. 19, С. Борткевич тв. 15;`,
        `•Одна соната у повному обсязі (без реприз) за вибором учасника:
       М. Клементі, Й. Гуммель, Й. Гайдн, В. А. Моцарт, Л. Бетховен.`,
      ],
    },
    secondRound: {
      title: 'Другий тур',
      p: `Учасники мають виконати програму тривалістю приблизно 35-40 хвилин. Програма
повинна включати:`,
      list: [
        `•Один з наступних творів:
Й. С. Бах – Ф. Бузоні. Хоральні прелюдії BWV 599 або BWV 639; К. Дебюссі. Одна з
прелюдій;
К. Дебюссі. «Серенада для ляльки»;
Ф. Ліст. «Втіха»;
Ф. Мендельсон. «Пісня без слів»;
В. А. Моцарт. Adagio сі мінор КV 540, Rondo ре мажор КV 485, Rondo ля мінор КV 511;
М. Мошковський. Один з етюдів;
М. Мошковський. «Іскринки»;
Д. Скарлатті. Соната (з репризами);
Ф. Шопен. Одна мазурка, ноктюрн або вальс;
Ф. Шуберт. Експромт;
Р. Шуман. Одна частина з «Фантастичних п’єс» тв. 12 або «Альбому для юнацтва» тв. 68.`,
      ],
    },
    thirdRound: {
      title: 'Третій тур (півфінал)',
      p: `Учасники виконують програму сольного концерту за власним вибором тривалістю 50–60 хвилин.`,
    },
    finalRound: {
      title: 'Фінальний тур',
      p: `Учасники виконують один із наступних концертів для фортепіано з оркестром:В. А. Моцарт. КV 466, 467, 488, 491, 537;
      Л. Бетховен. Тв. 37, 58, 73;
    Ф. Шопен. No 1 або No 2;
    Ф. Ліст. No 1 або No 2;
    Й. Брамс. No 1 або No 2;
    Р.Шуман;
    К. Шуман;
    К. Сен-Санс No 2 або No 5;
    М. Равель No 1 соль мажор.`,
      p2: `Програма, подана в заявці, не може бути змінена після 28 лютого 2023 року. Твори, включені до відеозапису, можуть бути виконані під час наступного туру наживо.`,
    },
  },
  en: {
    qualifyingRound: {
      title: 'Qualifying round',
      list: [
        'Candidates shall perform a programme lasting approx.15 minutes. The programme must include:',
        '•One virtuoso etude',
        '•One or more works chosen by the candidate.',
        'The works may be recorded separately.',
      ],
    },

    firstRound: {
      title: ' First round',
      p: `Candidates shall perform a programme lasting approx. 20-25 minutes. The programme must
include:`,
      list: [
        `•One etude by one of the following composers:
        Chopin, Liszt, Debussy, Ligeti, Saint-Saëns, Mendelssohn (Op. 104), V. Kosenko (11 Etudes in
the Form of Old Dances, Op.19), S. Bortkiewicz (op. 15).`,
        `•One complete Sonata (without repeats) by Clementi, Hummel, Haydn, Mozart or
Beethoven`,
      ],
    },
    secondRound: {
      title: 'Second round',
      p: `Candidates shall perform a programme lasting approx. 35-40 minutes. The programme must
inlcude:`,
      list: [
        `•One of the following compositions:
Bach-Busoni: Choral preludes BWV 599 or BWV 639
Debussy: one of the Preludes
Debussy: Serenade for a Doll
Liszt: Consolation
Mendelssohn-Bartholdy: Song without Words
Mozart: Adagio KV 540; Rondo KV 485, Rondo KV 511
Moszkowski: one Etude
Moszkowski: Sparkles
Scarlatti: a sonata (with repeats)
Chopin: one Mazurka, Nocturne, or Waltz
Schubert: one Impromptu
Schumann: one movement from Fantasiestücke, op. 12 or from Album für die Jugend op. 68`,
        `•One work by a Ukrainian composer
The WFIMC Prize will be given to the best performance in this category.
Please note that Prokofiev and Kapustin are not considered Ukrainian composers.`,
        `•One or more works chosen by the candidate`,
      ],
    },
    thirdRound: {
      title: ' Third round (semifinal)',
      p: `Candidates shall perform a solo recital program of their own choice lasting approx. 50-60
minutes.`,
    },
    finalRound: {
      title: 'Final round',
      p: `Candidates shall perform one of the following Piano Concertos:
      Mozart KV 466, KV 467, KV 488, KV 491, KV 537
 Beethoven Op. 37, 58, 73
 Chopin No. 1 or No. 2
 Liszt No. 1 or No. 2
 Brahms No. 1 or No. 2
 Robert Schumann
 Clara Schumann
 Saint-Saens No. 2 or No. 5
 Ravel G-Major`,
      p2: `Programs submitted in the application form cannot be changed after February 28, 2023. Works
included in the video recording may be performed during a later live round.`,
    },
  },
};
