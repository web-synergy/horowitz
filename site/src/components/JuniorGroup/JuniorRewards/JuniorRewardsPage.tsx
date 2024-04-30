import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';
import Loader from '@/components/Common/Loader';
import GroupRewards from '@/components/GroupPages/GroupRewards/GroupRewards';

const JuniorRewardsPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, rewards, fetchRewards, isLoading, prizes } =
    useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && rewards) return;
    if (!id) return;
    fetchRewards(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, language, rewards]);

  if (isLoading) {
    <Loader />;
  }

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
