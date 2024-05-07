import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import Loader from '@/components/Common/Loader';
import GroupStudentJury from '@/components/GroupPages/GroupStudentJury/GroupStudentJury';
import { Routes } from '@/types/routes.d';

const JuniorStudentsJuryListPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, studentsJury, fetchStudentsJury, isLoading } =
    useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && studentsJury) return;
    if (!id) return;

    fetchStudentsJury(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentsJury, id, language]);

  if (isLoading) {
    <Loader />;
  }

  return (
    <GroupStudentJury
      title={t(`navigation.${Routes.GROUP_STUDENT_JURY}`)}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      data={studentsJury}
    />
  );
};

export default JuniorStudentsJuryListPage;
