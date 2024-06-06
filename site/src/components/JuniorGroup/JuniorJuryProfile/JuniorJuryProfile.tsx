import { useLocation, Navigate } from 'react-router-dom';

import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';
import Loader from '@/components/Common/Loader';
import GroupJuryCard from '@/components/GroupPages/GroupJuryCard/GroupJuryCard';
import { Routes } from '@/types/routes.d';

const JuniorJuryProfile = () => {
  const { pathname } = useLocation();

  const { juries, fetchJury } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(juries, fetchJury);

  const jurySlug = pathname.split('/').slice(-1)[0];
  const juryDataInStore =
    juries && juries.find((profile) => profile.slug === jurySlug);

  if (!juryDataInStore && juries) {
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
