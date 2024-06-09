import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GroupPageProps } from '@/types/groupTypes';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import GroupParticipantList from '@/components/GroupPages/GroupParticipantList/GroupParticipantList';
import { Routes } from '@/types/routes.d';

const OtherGroupParticipantsPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { slug } = useCompetitionStore();

  const { participants, fetchParticipants } = useOtherGroupStore();

  useOtherGroupData(participants, fetchParticipants, group);

  const title = t(`navigation.${Routes.GROUP_PARTICIPANTS}`);
  const goBackLink = `/${Routes.COMPETITIONS}/${slug}/${group}`;

  return (
    <GroupParticipantList
      list={participants}
      goBackHref={goBackLink}
      title={title}
    />
  );
};

export default OtherGroupParticipantsPage;
