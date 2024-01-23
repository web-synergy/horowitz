import { FC } from 'react'
import HeroSection from './parts/HeroSection/HeroSection'
import HolidayCard from './parts/HolidayCard/HolidayCard'
import NewsSection from './parts/NewsSection/NewsSection'

import CompetitionWinners from './parts/CompetitionWinners/CompetitionWinners'
import holidayCard from './temp/holidayCard.jpg'
import CompetitionEvents from './parts/CompetitionEvents/CompetitionEvents'
import WatchOnline from './parts/WatchOnline/WatchOnline'

const MainPage: FC = () => {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <HolidayCard src={holidayCard} />
      <CompetitionWinners />
      <CompetitionEvents />
      <WatchOnline />
    </>
  )
}

export default MainPage
