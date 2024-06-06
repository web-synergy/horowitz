import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';

import GroupBooklet from '@/components/GroupPages/GroupBooklet/GroupBooklet';
import { Routes } from '@/types/routes.d';

const OtherGroupBookletPage: FC<GroupPageProps> = ({ group }) => {
  const { booklet, fetchBooklet } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(booklet, fetchBooklet, group);

  if (!booklet) return;

  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${group}`;
  return <GroupBooklet bookletUrl={booklet} goBackLink={goBackLink} />;
};

export default OtherGroupBookletPage;
