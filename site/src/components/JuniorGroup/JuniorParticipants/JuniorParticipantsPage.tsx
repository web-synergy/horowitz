import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import MainLayout from '../GroupNaigatrion/MainLayout';
import { Routes } from '@/types/routes.d';
import JuniorGroup from './parts/JuniorGroup';
import DebutGroup from './parts/DebutGroup';

const JuniorParticipantsPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, junior, fetchParticipants } = useJuniorGroupStore();
  const {
    junior: { _id: id },
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && junior) return;
    if (!id) return;

    fetchParticipants(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [junior, id, language]);

  const title = t(`navigation.${Routes.GROUP_PARTICIPANTS}`);

  return (
    <MainLayout title={title} juniorGroup={JuniorGroup} subGroup={DebutGroup} />
  );
};

export default JuniorParticipantsPage;
