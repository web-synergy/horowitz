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

  const title = t(`navigation.${Routes.GROUP_REWARDS}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`;

  return (
    <GroupRewards
      goBackLink={goBackLink}
      rewards={rewards}
      title={title}
      prizes={prizes}
    />
  );
};

export default JuniorRewardsPage;
