import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';
import Loader from '@/components/Common/Loader';
import GroupArtists from '@/components/GroupPages/GroupArtists/GroupArtists';

const JuniorArtistsPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, artists, fetchArtists, isLoading } =
    useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && artists) return;
    if (!id) return;
    fetchArtists(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, language, artists]);

  if (isLoading) {
    <Loader />;
  }

  return (
    <GroupArtists
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      data={artists}
      title={t(`navigation.${Routes.GROUP_ORCHESTRA}`)}
    />
  );
};
export default JuniorArtistsPage;
