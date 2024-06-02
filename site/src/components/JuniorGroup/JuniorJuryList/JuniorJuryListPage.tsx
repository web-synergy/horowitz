import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import GroupJuryList from '@/components/GroupPages/GroupJuryList/GroupJuryList';
import { Routes } from '@/types/routes.d';

const JuniorJuryListPage = () => {
  const { t } = useTranslation();
  const { juries, fetchJury } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(juries, fetchJury);

  const title = t(`navigation.${Routes.GROUP_JURY}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`;

  return (
    <GroupJuryList title={title} goBackLink={goBackLink} juryList={juries} />
  );
};

export default JuniorJuryListPage;
