import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import MainLayout from '../GroupNaigatrion/MainLayout';
import Group from './parts/Group';
import { Routes } from '@/types/routes.d';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

const JuniorWinnersPage = () => {
  const { t } = useTranslation();

  const { winners, fetchWinnersData } = useJuniorGroupStore();

  useJuniorGroupData(winners, fetchWinnersData);

  const title = t(`navigation.${Routes.GROUP_WINNERS}`);

  return <MainLayout juniorGroup={Group} subGroup={Group} title={title} />;
};

export default JuniorWinnersPage;
