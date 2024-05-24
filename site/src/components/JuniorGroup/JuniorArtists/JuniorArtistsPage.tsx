import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';
import { Routes } from '@/types/routes.d';

import GroupArtists from '@/components/GroupPages/GroupArtists/GroupArtists';

const JuniorArtistsPage = () => {
  const { t } = useTranslation();
  const { artists, fetchArtists } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();

  useJuniorGroupData(artists, fetchArtists);

  return (
    <GroupArtists
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      data={artists}
      title={t(`navigation.${Routes.GROUP_ORCHESTRA}`)}
    />
  );
};
export default JuniorArtistsPage;
