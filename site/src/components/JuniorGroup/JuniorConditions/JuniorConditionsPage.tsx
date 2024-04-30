import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';

import Loader from '@/components/Common/Loader';
import GroupTextArrayPage from '@/components/GroupPages/GroupTextArrayPage/GroupTextArrayPage';

const JuniorConditionsPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, conditions, fetchConditions, isLoading } =
    useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && conditions) return;
    if (!id) return;
    fetchConditions(id, language);
  }, [conditions, fetchConditions, id, language, requestLang]);

  if (isLoading) {
    <Loader />;
  }
  return (
    <GroupTextArrayPage
      title={t(`navigation.${Routes.GROUP_CONDITIONS}`)}
      data={conditions}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
    />
  );
};

export default JuniorConditionsPage;
