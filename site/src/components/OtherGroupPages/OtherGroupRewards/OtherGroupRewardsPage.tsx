import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useTranslation } from 'react-i18next';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';

import { Routes } from '@/types/routes.d';
import GroupRewards from '@/components/GroupPages/GroupRewards/GroupRewards';

const OtherGroupRewardsPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { rewards, fetchRewards, prizes } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(rewards, fetchRewards, group);

  const title = t(`navigation.${Routes.GROUP_REWARDS}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${group}`;

  return (
    <GroupRewards
      goBackLink={goBackLink}
      rewards={rewards}
      title={title}
      prizes={prizes}
    />
  );
};

export default OtherGroupRewardsPage;
