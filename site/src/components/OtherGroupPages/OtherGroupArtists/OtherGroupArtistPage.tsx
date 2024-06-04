import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useTranslation } from 'react-i18next';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';
import { Routes } from '@/types/routes.d';

import GroupArtists from '@/components/GroupPages/GroupArtists/GroupArtists';

const OtherGroupArtist: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { artists, fetchArtists } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(artists, fetchArtists, group);

  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${group}`;
  const title = t(`navigation.${Routes.GROUP_ORCHESTRA}`);

  return <GroupArtists goBackLink={goBackLink} data={artists} title={title} />;
};

export default OtherGroupArtist;
