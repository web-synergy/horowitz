import { Modal, Box } from '@mui/material';
import { useState, MouseEvent, useEffect } from 'react';
import { arrangeCircles, CirclesType } from '@/utils/arrangeTabletCircles';

import { ClierCard } from './GlierCard';
import { Member } from './Member';
import { RoundMemberData } from '@/libs/mockedData';
import { InfoCard } from '../InfoCard';

interface TabletLayoutProps {
  width: number;
  members: RoundMemberData[];
}

const ROUNDS = 4;

export const TabletLayout = ({ width, members }: TabletLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shownPerson, setShownPerson] = useState<number | null>(null);
  const [membersData, setMembersData] = useState<CirclesType[] | null>(null);

  useEffect(() => {
    if (!width) {
      return;
    }
    const result = arrangeCircles(width, members, ROUNDS);

    if (!result) return;
    setMembersData(result);
  }, [width, members]);

  const onClickCard = (e: MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (!id) {
      return;
    }
    setShownPerson(Number(id));
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
    setShownPerson(null);
  };

  if (!membersData) {
    return null;
  }

  const glier =
    membersData.find((member) => member.group === 0) || ({} as CirclesType);
  return (
    <>
      {membersData && <ClierCard {...glier} onClick={onClickCard} />}
      {membersData &&
        membersData
          .slice(1)
          .map((item, index) => (
            <Member {...item} key={index} onClick={onClickCard} />
          ))}
      <Modal open={isOpen} onClose={onCloseModal}>
        <Box>
          <InfoCard
            person={members.find((item) => item.id === shownPerson)}
            onClose={onCloseModal}
          />
        </Box>
      </Modal>
    </>
  );
};
