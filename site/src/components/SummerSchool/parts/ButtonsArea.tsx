import { MainAnnualSummerSchoolTypes } from '@/types/annualSummerSchoolTypes'
import { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

//  ========== ! TEMP ==========
import btn1 from '@/assets/images/buttonsBg/variant1.jpg'
import btn2 from '@/assets/images/buttonsBg/variant2.jpg'
import btn3 from '@/assets/images/buttonsBg/variant3.jpg'
import ListItem from './ListItem'
const buttonsBg = [
  { title: '1', image: btn1 },
  { title: '2', image: btn2 },
  { title: '3', image: btn3 },
]

//  ========== ! TEMP ==========

type ButtonsAreaProps = {
  btnsList: MainAnnualSummerSchoolTypes[]
}
const ButtonsArea: FC<ButtonsAreaProps> = ({ btnsList }) => {
  btnsList = btnsList.sort((a, b) => parseInt(b.year) - parseInt(a.year))

  const getImgSrc = (title: string): string => {
    // @ts-ignore
    return buttonsBg.find(btn => btn.title === title)?.image
  }

  if (!btnsList.length) return null

  return (
    <Swiper
      breakpoints={{
        300: {
          slidesPerView: 1.05,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.1,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3.2,
          spaceBetween: 24,
        },
      }}
    >
      {btnsList.map(button => (
        <SwiperSlide key={button.slug.current}>
          <ListItem bgImage={getImgSrc(button.button)} {...button} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ButtonsArea
