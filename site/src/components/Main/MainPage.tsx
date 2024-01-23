import { FC } from 'react'
import HeroSection from './parts/HeroSection/HeroSection'
import HolidayCard from './parts/HolidayCard/HolidayCard'
import NewsSection from './parts/NewsSection/NewsSection'

import CompetitionWinners from './parts/CompetitionWinners/CompetitionWinners'
import holidayCard from './temp/holidayCard.jpg'

const MainPage: FC = () => {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <HolidayCard src={holidayCard} />
      <CompetitionWinners />
    </>
  )
}

export default MainPage
