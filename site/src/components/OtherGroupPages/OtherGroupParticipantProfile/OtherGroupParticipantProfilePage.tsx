import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useParams, Navigate } from 'react-router-dom';

import { useOtherGroupData } from '@/hook/useOtherGroupData';
import { useOtherGroupStore } from '@/store/otherGroupStore';

import GroupParticipant from '@/components/GroupPages/GroupParticipant/GroupParticipant';
import { Routes } from '@/types/routes.d';

const OtherGroupParticipantProfilePage: FC<GroupPageProps> = ({ group }) => {
  const { slug } = useParams();

  const { participants, fetchParticipants } = useOtherGroupStore();

  useOtherGroupData(participants, fetchParticipants, group);

  if (!participants) {
    return;
  }

  const participantData = participants.find((item) => item.slug === slug);

  if (!participantData) {
    return <Navigate to="404" />;
  }

  return (
    <GroupParticipant
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_PARTICIPANTS}`}
      participant={participantData}
    />
  );
};

export default OtherGroupParticipantProfilePage;
