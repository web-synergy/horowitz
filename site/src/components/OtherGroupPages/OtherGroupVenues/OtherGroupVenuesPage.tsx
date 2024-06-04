import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';
import { Routes } from '@/types/routes.d';

import GroupTextArrayPage from '@/components/GroupPages/GroupTextArrayPage/GroupTextArrayPage';

const OtherGroupVenuesPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { venues, fetchVenues } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(venues, fetchVenues, group);

  const title = t(`navigation.${Routes.GROUP_VENUES}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`;

  return (
    <GroupTextArrayPage title={title} data={venues} goBackLink={goBackLink} />
  );
};

export default OtherGroupVenuesPage;
