import { MouseEvent } from 'react';
import { RoundMemberData } from '@/libs/mockedData';
import { CirclesType } from '@/utils/arrangeCircles';

import { BigCard } from '../shared/BigCard';
import { SmallCard } from '../shared/SmallCard';

interface MemberProps extends RoundMemberData, CirclesType {
  onClickCard: (e: MouseEvent<HTMLDivElement>) => void;
}

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
  id,
  onClickCard,
}: MemberProps) => {
  const ratio = l === 1 ? 1.08 : 1;
  const itemShiftY = shiftY || 1;
  const itemShiftX = shiftX || 1;

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
          onClick={onClickCard}
          id={id}
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
          onClick={onClickCard}
          id={id}
        />
      )}
    </>
  );
};
