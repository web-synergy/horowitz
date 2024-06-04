import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';
import { GroupPageProps } from '@/types/groupTypes';
import { Routes } from '@/types/routes.d';
import GroupTextArrayPage from '@/components/GroupPages/GroupTextArrayPage/GroupTextArrayPage';

const OtherGroupConditionsPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { conditions, fetchConditions } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(conditions, fetchConditions, group);

  return (
    <GroupTextArrayPage
      title={t(`navigation.${Routes.GROUP_CONDITIONS}`)}
      data={conditions}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${group}`}
    />
  );
};

export default OtherGroupConditionsPage;
