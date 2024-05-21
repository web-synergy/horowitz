import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import MainLayout from './parts/MainLayout';

const JuniorWinnersPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, winners, fetchWinnersData } = useJuniorGroupStore();
  const {
    junior: { _id: id },
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && winners) return;
    if (!id) return;
    fetchWinnersData(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winners, id, language]);

  return <MainLayout />;
};

export default JuniorWinnersPage;
