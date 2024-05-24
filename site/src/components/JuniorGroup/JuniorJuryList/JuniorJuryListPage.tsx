import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import GroupJuryList from '@/components/GroupPages/GroupJuryList/GroupJuryList';
import { Routes } from '@/types/routes.d';

const JuniorJuryListPage = () => {
  const { t } = useTranslation();
  const { jury, fetchJury } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(jury, fetchJury);

  return (
    <GroupJuryList
      title={t(`navigation.${Routes.GROUP_JURY}`)}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      juryList={jury}
    />
  );
};

export default JuniorJuryListPage;
