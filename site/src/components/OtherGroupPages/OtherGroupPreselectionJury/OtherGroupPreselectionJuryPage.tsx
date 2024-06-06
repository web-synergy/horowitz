import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GroupPageProps } from '@/types/groupTypes';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import GroupJuryList from '@/components/GroupPages/GroupJuryList/GroupJuryList';
import { Routes } from '@/types/routes.d';

const OtherGroupPreselectionJuryPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { preselectionJury, fetchPreselectionJury } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(preselectionJury, fetchPreselectionJury, group);

  const title = t(`navigation.${Routes.GROUP_PRESELECTION_JURY}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${group}`;

  console.log(preselectionJury);
  return (
    <GroupJuryList
      title={title}
      goBackLink={goBackLink}
      juryList={preselectionJury}
    />
  );
};

export default OtherGroupPreselectionJuryPage;
