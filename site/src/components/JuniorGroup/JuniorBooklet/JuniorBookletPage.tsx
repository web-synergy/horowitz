import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import GroupBooklet from '@/components/GroupPages/GroupBooklet/GroupBooklet';
import { Routes } from '@/types/routes.d';

const JuniorBookletPage = () => {
  const { booklet, fetchBooklet } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(booklet, fetchBooklet);

  if (!booklet) return;

  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`;

  return <GroupBooklet bookletUrl={booklet} goBackLink={goBackLink} />;
};

export default JuniorBookletPage;
