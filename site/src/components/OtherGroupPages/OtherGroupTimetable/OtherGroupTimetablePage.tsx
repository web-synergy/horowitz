import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';

import GroupTextPage from '@/components/GroupPages/GroupTextPage/GroupTextPage';
import { Routes } from '@/types/routes.d';

const OtherGroupTimetablePage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { slug } = useCompetitionStore();
  const { timetable, fetchTimetable } = useOtherGroupStore();

  useOtherGroupData(timetable, fetchTimetable, group);

  const title = t(`navigation.${Routes.GROUP_TIMETABLE}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${group}`;

  return (
    <GroupTextPage title={title} data={timetable} goBackLink={goBackLink} />
  );
};

export default OtherGroupTimetablePage;
