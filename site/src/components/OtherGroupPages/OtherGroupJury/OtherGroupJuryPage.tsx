import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GroupPageProps } from '@/types/groupTypes';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import GroupJuryList from '@/components/GroupPages/GroupJuryList/GroupJuryList';
import { Routes } from '@/types/routes.d';

const OtherGroupJuryPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { juries, fetchJury } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(juries, fetchJury, group);

  const title = t(`navigation.${Routes.GROUP_JURY}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${group}`;

  return (
    <GroupJuryList title={title} goBackLink={goBackLink} juryList={juries} />
  );
};

export default OtherGroupJuryPage;
