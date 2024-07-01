import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { t } from 'i18next';
import { Routes } from '@/types/routes.d';
import GroupStudentJury from '@/components/GroupPages/GroupStudentJury/GroupStudentJury';
import Loader from '@/components/Common/Loader';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';

const Students = () => {
  const { participants, fetchParticipants, isLoading } =
    useAnnualSummerSchoolStore();

  useAnnualSchoolData(participants, fetchParticipants);

  if (isLoading) {
    return <Loader />;
  }

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
