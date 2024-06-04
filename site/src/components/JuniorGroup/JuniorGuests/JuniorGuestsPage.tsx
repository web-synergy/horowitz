import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import GroupGuests from '@/components/GroupPages/GroupGuests/GroupGuests';
import { Routes } from '@/types/routes.d';

const JuniorGuestsPage = () => {
  const { t } = useTranslation();
  const { guests, fetchGuests } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(guests, fetchGuests);

  const title = t(`navigation.${Routes.GROUP_GUESTS}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`;

  return <GroupGuests goBackLink={goBackLink} title={title} guests={guests} />;
};

export default JuniorGuestsPage;
