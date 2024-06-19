import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { t } from 'i18next';
import { Routes } from '@/types/routes.d';
import GroupStudentJury from '@/components/GroupPages/GroupStudentJury/GroupStudentJury';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';

const Students = () => {
  const { participants, fetchParticipants } = useAnnualSummerSchoolStore();

  useAnnualSchoolData(participants, fetchParticipants);

  if (!participants) {
    return null;
  }

  return (
    <GroupStudentJury
      goBackLink={Routes.SUMMER_SCHOOL}
      data={participants}
      title={t(`navigation.${Routes.KYIV_GENEVA_PARTICIPANTS}`)}
    />
  );
};

export default Students;
