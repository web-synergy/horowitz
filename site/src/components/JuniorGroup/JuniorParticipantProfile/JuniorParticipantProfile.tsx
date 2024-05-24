import { useParams, Navigate } from 'react-router-dom';

import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useJuniorGroupData } from '@/hook/useJuniorGroupData';

import GroupParticipant from '@/components/GroupPages/GroupParticipant/GroupParticipant';
import { Routes } from '@/types/routes.d';
import { ParticipantType } from '@/types/groupTypes';

const JuniorParticipantProfile = () => {
  const { slug } = useParams();

  const { junior, debut, fetchParticipants } = useJuniorGroupStore();

  useJuniorGroupData(junior, fetchParticipants);

  if (!junior || !debut) {
    return;
  }

  const groupName = slug?.split('-')[0];

  const participantData =
    groupName === 'junior'
      ? junior.find((participant) => participant.slug === slug)
      : Object.entries(debut).reduce<null | ParticipantType>((acc, item) => {
          const [group, participants] = item;
          if (group.toLowerCase() === groupName) {
            const profile = participants.find(
              (participant) => participant.slug === slug
            );
            return profile ? profile : null;
          }

          return acc;
        }, null);

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
