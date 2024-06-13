import { MainAnnualSummerSchoolTypes } from '@/types/annualSummerSchoolTypes';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ListItem from './ListItem';

import 'swiper/swiper-bundle.css';
import s from './swiper.module.css';

import btn1 from '@/assets/images/buttonsBg/variant1.jpg';
import btn2 from '@/assets/images/buttonsBg/variant2.jpg';
import btn3 from '@/assets/images/buttonsBg/variant3.jpg';

const buttonsBg = [
  { title: '1', image: btn1 },
  { title: '2', image: btn2 },
  { title: '3', image: btn3 },
];

type ButtonsAreaProps = {
  btnsList: MainAnnualSummerSchoolTypes[];
};

const ButtonsArea: FC<ButtonsAreaProps> = ({ btnsList }) => {
  btnsList = btnsList.sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const getImgSrc = (title: string): string => {
    return (
      buttonsBg.find((btn) => btn.title === title)?.image || buttonsBg[0].image
    );
  };

  if (!btnsList.length) return null;

  console.log(btnsList);
  return (
    <Swiper
      slidesPerView="auto"
      prefix="btn"
      breakpoints={{
        300: {
          spaceBetween: 8,
        },
        768: {
          spaceBetween: 24,
        },
      }}
    >
      {btnsList.map((button) => (
        <SwiperSlide key={button.slug} className={s.swiperSlide}>
          <ListItem bgImage={getImgSrc(button.button)} {...button} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ButtonsArea;
