import { FC, useEffect } from 'react';
import CompetitionEvents from './parts/CompetitionEvents/CompetitionEvents';
import CompetitionOrganizers from './parts/CompetitionOrganizers/CompetitionOrganizers';
import CompetitionWinners from './parts/CompetitionWinners/CompetitionWinners';
import HeroSection from './parts/HeroSection/HeroSection';
import HolidayCard from './parts/HolidayCard/HolidayCard';
import NewsSection from './parts/NewsSection/NewsSection';
import PartnersAndFriends from './parts/PartnersAndFriends/PartnersAndFriends';
import WatchOnline from './parts/WatchOnline/WatchOnline';

import { useHomeStore } from '@/store/homeStore';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const { fetchHome, requestLang } = useHomeStore();

  useEffect(() => {
    if (requestLang === language) return;
    fetchHome(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <NewsSection />
      <HolidayCard />
      <CompetitionWinners />
      <CompetitionEvents />
      <WatchOnline />
      <CompetitionOrganizers />
      <PartnersAndFriends />
    </>
  );
};

export default MainPage;
