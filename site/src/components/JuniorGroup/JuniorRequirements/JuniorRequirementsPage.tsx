import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';
import Loader from '@/components/Common/Loader';
import GroupTextPage from '@/components/GroupPages/GroupTextPage/GroupTextPage';

const JuniorRequirementsPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, requirements, fetchRequirements, isLoading } =
    useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && requirements) return;
    if (!id) return;
    fetchRequirements(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, language, requirements]);

  if (isLoading) {
    <Loader />;
  }

  return (
    <GroupTextPage
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      data={requirements}
      title={t(`navigation.${Routes.GROUP_REQUIREMENTS}`)}
    />
  );
};

export default JuniorRequirementsPage;
