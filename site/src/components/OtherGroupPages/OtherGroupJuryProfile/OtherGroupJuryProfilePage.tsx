import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useLocation, Navigate } from 'react-router-dom';

import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';
import Loader from '@/components/Common/Loader';
import GroupJuryCard from '@/components/GroupPages/GroupJuryCard/GroupJuryCard';
import { Routes } from '@/types/routes.d';

const OtherGroupJuryProfilePage: FC<GroupPageProps> = ({ group }) => {
  const { pathname } = useLocation();

  const { juries, fetchJury } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(juries, fetchJury, group);

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
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${group}/${Routes.GROUP_JURY}`}
    />
  );
};

export default OtherGroupJuryProfilePage;
