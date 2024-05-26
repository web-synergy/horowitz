import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import GroupTextPage from '@/components/GroupPages/GroupTextPage/GroupTextPage';
import { Routes } from '@/types/routes.d';

const JuniorTimetablePage = () => {
  const { t } = useTranslation();
  const { slug } = useCompetitionStore();
  const { timetable, fetchTimetable } = useJuniorGroupStore();

  useJuniorGroupData(timetable, fetchTimetable);

  return (
    <GroupTextPage
      title={t(`navigation.${Routes.GROUP_TIMETABLE}`)}
      data={timetable}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
    />
  );
};

export default JuniorTimetablePage;
