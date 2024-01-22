import { FC } from 'react'
import HeroSection from './parts/HeroSection/HeroSection'
import NewsSection from './parts/NewsSection/NewsSection'
import HolidayCard from './parts/NewsSection/HolidayCard/HolidayCard'

import holidayCard from './temp/holidayCard.jpg'

const MainPage: FC = () => {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <HolidayCard src={holidayCard} />
    </>
  )
}

export default MainPage
