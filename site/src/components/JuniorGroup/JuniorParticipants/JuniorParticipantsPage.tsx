import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';

import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import MainLayout from '../GroupNavigation/MainLayout';
import { Routes } from '@/types/routes.d';
import JuniorGroup from './parts/JuniorGroup';
import DebutGroup from './parts/DebutGroup';

const JuniorParticipantsPage = () => {
  const { t } = useTranslation();
  const { participants, fetchParticipants } = useJuniorGroupStore();

  useJuniorGroupData(participants, fetchParticipants);

  const title = t(`navigation.${Routes.GROUP_PARTICIPANTS}`);

  return (
    <MainLayout title={title} juniorGroup={JuniorGroup} subGroup={DebutGroup} />
  );
};

export default JuniorParticipantsPage;
