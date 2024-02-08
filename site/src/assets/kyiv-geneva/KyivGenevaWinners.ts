import Roman_Fediurko from '../images/kyiv-geneva/participants/Fediurko_Roman.jpg';
import Julian_Trevelyan from '../images/kyiv-geneva/participants/Trevelyan_Julian.jpg';
import Kyoungsun_Park from '../images/kyiv-geneva/participants/park_kyoungsun.jpg';
import mainImg from '../images/kyiv-geneva/winners.png';
import { IKGWinnersData } from '@/types/kyivGenevaDataTypes';
export const winnersData: IKGWinnersData = {
  mainImag: mainImg,
  winners: {
    ua: [
      {
        fullName: 'Роман Федюрко',
        prizePlace: 'І Премія і Золота медаль',
        img: Roman_Fediurko,
      },
      {
        fullName: 'Джуліан Тревельян',
        prizePlace: 'ІІ Премія і Срібна медаль',
        img: Julian_Trevelyan,
      },
      {
        fullName: 'Йонсон Пак',
        prizePlace: 'ІІІ Премія і Бронзова медаль',
        img: Kyoungsun_Park,
      },
    ],
    en: [
      {
        fullName: 'Roman Fediurko',
        prizePlace: '1st Prize, the Prizewinners title and the Gold Medal',
        img: Roman_Fediurko,
      },
      {
        fullName: 'Julian Trevelyan',
        prizePlace: '2nd, Prize the Prizewinners title and the Silver Medal',
        img: Julian_Trevelyan,
      },
      {
        fullName: 'Kyoungsun Park',
        prizePlace: '3rd Prize, the Prizewinners title and Bronze Medal',
        img: Kyoungsun_Park,
      },
    ],
  },
};
