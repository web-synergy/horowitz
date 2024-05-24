import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import { Routes } from '@/types/routes.d';
import GroupRewards from '@/components/GroupPages/GroupRewards/GroupRewards';

const JuniorRewardsPage = () => {
  const { t } = useTranslation();
  const { rewards, fetchRewards, prizes } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(rewards, fetchRewards);

  return (
    <GroupRewards
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      prizes={prizes}
      rewards={rewards}
      title={t(`navigation.${Routes.GROUP_REWARDS}`)}
    />
  );
};

export default JuniorRewardsPage;
