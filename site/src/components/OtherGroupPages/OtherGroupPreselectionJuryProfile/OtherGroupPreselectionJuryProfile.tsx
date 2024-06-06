import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useLocation, Navigate } from 'react-router-dom';

import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';
import Loader from '@/components/Common/Loader';
import GroupJuryCard from '@/components/GroupPages/GroupJuryCard/GroupJuryCard';
import { Routes } from '@/types/routes.d';

const OtherGroupPreselectionJuryProfile: FC<GroupPageProps> = ({ group }) => {
  const { pathname } = useLocation();

  const { preselectionJury, fetchPreselectionJury } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(preselectionJury, fetchPreselectionJury, group);

  const jurySlug = pathname.split('/').slice(-1)[0];
  const juryDataInStore =
    preselectionJury &&
    preselectionJury.find((profile) => profile.slug === jurySlug);

  if (!juryDataInStore && preselectionJury) {
    return <Navigate to={'/404'} />;
  }

  if (!juryDataInStore) {
    return <Loader />;
  }

  return (
    <GroupJuryCard
      jury={juryDataInStore}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${group}/${Routes.GROUP_PRESELECTION_JURY}`}
    />
  );
};

export default OtherGroupPreselectionJuryProfile;
