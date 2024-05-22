import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import MainLayout from '../GroupNaigatrion/MainLayout';
import Group from './parts/Group';
import { Routes } from '@/types/routes.d';

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

  const title = t(`navigation.${Routes.GROUP_WINNERS}`);

  return <MainLayout juniorGroup={Group} subGroup={Group} title={title} />;
};

export default JuniorWinnersPage;
