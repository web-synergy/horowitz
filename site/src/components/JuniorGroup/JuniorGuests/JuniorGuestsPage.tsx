import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import Loader from '@/components/Common/Loader';
import GroupGuests from '@/components/GroupPages/GroupGuests/GroupGuests';
import { Routes } from '@/types/routes.d';

const JuniorGuestsPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, guests, fetchGuests, isLoading } = useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && guests) return;
    if (!id) return;
    fetchGuests(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guests, id, language]);

  if (isLoading) {
    <Loader />;
  }

  return (
    <GroupGuests
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      title={t(`navigation.${Routes.GROUP_GUESTS}`)}
      guests={guests}
    />
  );
};

export default JuniorGuestsPage;
