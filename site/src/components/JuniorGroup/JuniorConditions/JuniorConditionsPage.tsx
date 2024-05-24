import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';
import { Routes } from '@/types/routes.d';

import GroupTextArrayPage from '@/components/GroupPages/GroupTextArrayPage/GroupTextArrayPage';

const JuniorConditionsPage = () => {
  const { t } = useTranslation();
  const { conditions, fetchConditions } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(conditions, fetchConditions);

  return (
    <GroupTextArrayPage
      title={t(`navigation.${Routes.GROUP_CONDITIONS}`)}
      data={conditions}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
    />
  );
};

export default JuniorConditionsPage;
