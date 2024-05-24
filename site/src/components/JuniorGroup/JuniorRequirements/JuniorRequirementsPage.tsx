import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';
import { Routes } from '@/types/routes.d';
import GroupTextPage from '@/components/GroupPages/GroupTextPage/GroupTextPage';

const JuniorRequirementsPage = () => {
  const { t } = useTranslation();
  const { requirements, fetchRequirements } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(requirements, fetchRequirements);

  return (
    <GroupTextPage
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      data={requirements}
      title={t(`navigation.${Routes.GROUP_REQUIREMENTS}`)}
    />
  );
};

export default JuniorRequirementsPage;
