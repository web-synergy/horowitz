import { FC } from 'react';
import CompetitionEvents from './parts/CompetitionEvents/CompetitionEvents';
import CompetitionOrganizers from './parts/CompetitionOrganizers/CompetitionOrganizers';
import CompetitionWinners from './parts/CompetitionWinners/CompetitionWinners';
import HeroSection from './parts/HeroSection/HeroSection';
import HolidayCard from './parts/HolidayCard/HolidayCard';
import NewsSection from './parts/NewsSection/NewsSection';
import PartnersAndFriends from './parts/PartnersAndFriends/PartnersAndFriends';
import WatchOnline from './parts/WatchOnline/WatchOnline';
import holidayCard from './temp/holidayCard.jpg';

const MainPage: FC = () => {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <HolidayCard src={holidayCard} />
      <CompetitionWinners />
      <CompetitionEvents />
      <WatchOnline />
      <CompetitionOrganizers />
      <PartnersAndFriends />
    </>
  );
};

export default MainPage;
