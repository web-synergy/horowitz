import { useParams, Navigate } from 'react-router-dom';

import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import GroupParticipant from '@/components/GroupPages/GroupParticipant/GroupParticipant';
import { Routes } from '@/types/routes.d';

const JuniorParticipantProfile = () => {
  const { slug } = useParams();

  const { participants, fetchParticipants } = useJuniorGroupStore();

  useJuniorGroupData(participants, fetchParticipants);

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

export default JuniorParticipantProfile;
