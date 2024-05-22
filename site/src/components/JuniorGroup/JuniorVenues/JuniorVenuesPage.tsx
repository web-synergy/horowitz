import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';

import Loader from '@/components/Common/Loader';
import GroupTextArrayPage from '@/components/GroupPages/GroupTextArrayPage/GroupTextArrayPage';

const JuniorVenuesPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, venues, fetchVenues, isLoading } = useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && venues) return;
    if (!id) return;
    fetchVenues(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venues, id, language]);

  if (isLoading) {
    <Loader />;
  }
  return (
    <GroupTextArrayPage
      title={t(`navigation.${Routes.GROUP_VENUES}`)}
      data={venues}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
    />
  );
};

export default JuniorVenuesPage;
