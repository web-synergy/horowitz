import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import Loader from '@/components/Common/Loader';
import GroupTextPage from '@/components/GroupPages/GroupTextPage/GroupTextPage';
import { Routes } from '@/types/routes.d';

const JuniorTimetablePage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, timetable, fetchTimetable, isLoading } =
    useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && timetable) return;
    if (!id) return;
    fetchTimetable(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, language, timetable]);

  if (isLoading) {
    <Loader />;
  }

  return (
    <GroupTextPage
      title={t(`navigation.${Routes.GROUP_TIMETABLE}`)}
      data={timetable}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
    />
  );
};

export default JuniorTimetablePage;
