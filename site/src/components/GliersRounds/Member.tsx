import { useState } from 'react';
import { RoundMemberData } from '@/libs/mockedData';
import { CirclesType } from '@/utils/arrangeCircles';

import { Modal } from '@mui/material';
import { BigCard } from './BigCard';
import { SmallCard } from './SmallCard';
import { InfoCard } from './InfoCard';

interface MemberProps extends RoundMemberData, CirclesType {}

export const Member = ({
  l,
  d,
  x,
  y,
  name,
  years,
  group,
  isBig,
  shiftY,
  shiftX,
  image,
  data,
}: MemberProps) => {
  const ratio = l === 1 ? 1.08 : 1;
  const itemShiftY = shiftY || 1;
  const itemShiftX = shiftX || 1;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

  return (
    <>
      {isBig ? (
        <BigCard
          x={x}
          d={d}
          y={y}
          itemShiftX={itemShiftX}
          itemShiftY={itemShiftY}
          ratio={ratio}
          group={group}
          name={name}
          years={years}
          image={image}
          onClick={onOpenModal}
        />
      ) : (
        <SmallCard
          x={x}
          d={d}
          y={y}
          itemShiftX={itemShiftX}
          itemShiftY={itemShiftY}
          ratio={ratio}
          group={group}
          name={name}
          years={years}
          onClick={onOpenModal}
        />
      )}
      <Modal open={isOpen} onClose={onCloseModal}>
        <InfoCard
          data={data}
          name={name}
          years={years}
          group={group}
          onClose={onCloseModal}
        />
      </Modal>
    </>
  );
};
