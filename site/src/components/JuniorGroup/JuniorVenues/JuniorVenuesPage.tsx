import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';
import { Routes } from '@/types/routes.d';

import GroupTextArrayPage from '@/components/GroupPages/GroupTextArrayPage/GroupTextArrayPage';

const JuniorVenuesPage = () => {
  const { t } = useTranslation();
  const { venues, fetchVenues } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(venues, fetchVenues);
  const title = t(`navigation.${Routes.GROUP_VENUES}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`;

  return (
    <GroupTextArrayPage title={title} data={venues} goBackLink={goBackLink} />
  );
};

export default JuniorVenuesPage;
