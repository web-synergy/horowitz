import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import GroupStudentJury from '@/components/GroupPages/GroupStudentJury/GroupStudentJury';
import { Routes } from '@/types/routes.d';

const JuniorStudentsJuryListPage = () => {
  const { t } = useTranslation();
  const { studentsJury, studentJuryDesc, fetchStudentsJury } =
    useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(studentsJury, fetchStudentsJury);

  return (
    <GroupStudentJury
      title={t(`navigation.${Routes.GROUP_STUDENT_JURY}`)}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      data={studentsJury}
      desc={studentJuryDesc}
    />
  );
};

export default JuniorStudentsJuryListPage;
