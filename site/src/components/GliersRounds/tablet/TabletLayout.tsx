import { Modal, Box } from '@mui/material';
import { useState, MouseEvent, useEffect } from 'react';
import { arrangeCircles } from '@/utils/arrangeCircles';
import { concatPositionWithData } from '@/utils/concatPositionWithData';
import { MainPerson } from '../shared/MainPerson';
import { Member } from './Member';
import { RoundMemberData } from '@/libs/mockedData';
import { InfoCard } from '../InfoCard';
import { ResultType } from '@/utils/concatPositionWithData';

interface TabletLayoutProps {
  width: number;
  members: RoundMemberData[];
}

export const ROUNDS = 4;

export const TabletLayout = ({ width, members }: TabletLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shownPerson, setShownPerson] = useState<number | null>(null);
  const [membersData, setMembersData] = useState<ResultType[] | null>(null);

  useEffect(() => {
    if (!width) {
      return;
    }
    const result = arrangeCircles(width, members.length, ROUNDS);

    const data = concatPositionWithData(result, members);
    setMembersData(data);
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

  return (
    <>
      {membersData && <MainPerson {...membersData[0]} />}
      {membersData &&
        membersData
          .slice(1)
          .map((item, index) => (
            <Member {...item} key={index} onClickCard={onClickCard} />
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
