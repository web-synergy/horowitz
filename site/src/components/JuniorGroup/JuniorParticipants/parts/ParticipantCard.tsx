import { FC } from 'react';
import { JuniorParticipantType } from '@/types/groupTypes';
import { useLocation } from 'react-router-dom';
import ParticipantItem from '@/components/GroupPages/GroupParticipantList/parts/ParticipantItem';

interface ParticipantCardProps {
  item: JuniorParticipantType;
}

const ParticipantCard: FC<ParticipantCardProps> = ({ item }) => {
  const { age, name, avatar, slug } = item;

  const { pathname } = useLocation();
  const basePath = pathname.split('/').slice(0, 5).join('/');

  const readMoreLink = `${basePath}/${slug}`;

  return (
    <ParticipantItem
      age={age}
      img={avatar}
      name={name}
      readMoreLink={readMoreLink}
    />
  );
};

export default ParticipantCard;
