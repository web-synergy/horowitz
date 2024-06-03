import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useTranslation } from 'react-i18next';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';

import GroupGuests from '@/components/GroupPages/GroupGuests/GroupGuests';
import { Routes } from '@/types/routes.d';

const OtherGroupGuestsPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { guests, fetchGuests } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(guests, fetchGuests, group);

  const title = t(`navigation.${Routes.GROUP_GUESTS}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${group}`;

  return <GroupGuests goBackLink={goBackLink} title={title} guests={guests} />;
};

export default OtherGroupGuestsPage;
