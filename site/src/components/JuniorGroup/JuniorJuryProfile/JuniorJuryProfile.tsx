import { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import Loader from '@/components/Common/Loader';
import GroupJuryCard from '@/components/GroupPages/GroupJuryCard/GroupJuryCard';
import { Routes } from '@/types/routes.d';

const JuniorJuryProfile = () => {
  const { pathname } = useLocation();
  const {
    i18n: { language },
  } = useTranslation();
  const { requestLang, jury, fetchJury, isLoading } = useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && jury) return;
    if (!id) return;

    fetchJury(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jury, id, language]);

  const jurySlug = pathname.split('/').slice(-1)[0];
  const juryDataInStore =
    jury && jury.find((profile) => profile.slug === jurySlug);

  if (isLoading) {
    <Loader />;
  }

  if (!juryDataInStore && jury) {
    return <Navigate to={'/404'} />;
  }

  if (!juryDataInStore) {
    return <Loader />;
  }

  return (
    <GroupJuryCard
      jury={juryDataInStore}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_JURY}`}
    />
  );
};

export default JuniorJuryProfile;
