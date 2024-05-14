import { FC } from 'react';
import { ParticipantType } from '@/types/groupTypes';

interface GroupParticipantListProps {
  list: ParticipantType[];
  goBackHref: string;
}

const GroupParticipantList: FC<GroupParticipantListProps> = () => {
  return <div>Group Participant</div>;
};

export default GroupParticipantList;
