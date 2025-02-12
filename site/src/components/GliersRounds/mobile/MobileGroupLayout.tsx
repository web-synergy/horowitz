import { Box, Modal } from '@mui/material';
import { useState, useEffect, MouseEvent } from 'react';
import { MobileGlierCard } from './MobileGlierCard';
import { MobileTeacherCard } from './MobileTeacherCard';
import { MobileStudentCard } from './MobileStudentCard';
import { RoundMemberData } from '@/libs/mockedData';
import { InfoCard } from '../InfoCard';

interface MobileGroupLayoutProps {
  groupMember: RoundMemberData[];
  group: 1 | 2;
  width: number;
  glierData: RoundMemberData;
}

interface LayoutStateType {
  smallCircleWidth: number;
  mediumCircleWidth: number;
  bigCircleWidth: number;
  centerX: number;
  centerY: number;
  height: number;
  gap: number;
}

interface MemberStateType extends RoundMemberData {
  x: number;
  y: number;
}
export const MobileGroupLayout = ({
  group,
  groupMember,
  width,
  glierData,
}: MobileGroupLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shownPerson, setShownPerson] = useState<null | number>(null);

  const [members, setMembers] = useState<MemberStateType[] | null>(null);
  const [layoutData, setLayoutData] = useState<LayoutStateType>(
    {} as LayoutStateType
  );

  const teacher = groupMember.find((member) => member.isTeacher);
  const isEven = group % 2 === 1;
  const modalData = [glierData, ...groupMember];

  useEffect(() => {
    if (!width) {
      return;
    }

    const smallCircleWidth = Math.floor(width * 0.12);
    const mediumCircleWidth = smallCircleWidth * 1.8;
    const bigCircleWidth = smallCircleWidth * 2.5;
    const centerX = isEven
      ? smallCircleWidth / 2
      : width - smallCircleWidth / 2 - bigCircleWidth;

    const centerY = width / 2 - bigCircleWidth / 2;
    const gap = width * 0.01;

    const membersArray = groupMember.filter((member) => !member.isTeacher);

    let round = 1;
    const smallCircleArray = [];
    let count = 0;

    while (count < membersArray.length) {
      const radiusOfCurrentCircle =
        bigCircleWidth / 2 +
        2 * gap +
        (smallCircleWidth / 2 + 2 * gap) * round +
        (smallCircleWidth / 2) * (round - 1);

      const arcPart = isEven ? 0.7 : 0.6;
      const arcLength =
        radiusOfCurrentCircle * 2 * Math.PI * arcPart - mediumCircleWidth - gap;

      const totalCirclesOnRound = Math.floor(
        arcLength / (smallCircleWidth * 1.05 + gap + round * 2)
      );

      const memberForRound = membersArray.slice(
        smallCircleArray.length,
        smallCircleArray.length + totalCirclesOnRound
      );

      const startPosition = round < 3 ? 0.64 : 0.4;
      const startAngle = isEven
        ? -(0.63 - (round - 1) * 0.04) * Math.PI
        : (startPosition + (round - 1) * 0.02) * Math.PI;

      const endAngle = isEven
        ? 0.7 * Math.PI
        : (1.8 - (round - 1) * 0.06) * Math.PI;
      const angleStep = (endAngle - startAngle) / (totalCirclesOnRound + 1);

      const roundCircles = memberForRound.map((_, i) => {
        const angle = startAngle + i * angleStep;
        const x = Math.floor(centerX + radiusOfCurrentCircle * Math.cos(angle));
        const y = Math.floor(centerY - radiusOfCurrentCircle * Math.sin(angle));
        return {
          x: x + bigCircleWidth / 3,
          y: y + bigCircleWidth / 3.3,
          ...memberForRound[i],
        };
      });
      smallCircleArray.push(...roundCircles);
      round++;
      count = count + totalCirclesOnRound;
    }

    const height = bigCircleWidth + 1.9 * round * smallCircleWidth;

    setMembers(smallCircleArray);
    setLayoutData({
      smallCircleWidth,
      mediumCircleWidth,
      bigCircleWidth,
      centerX,
      centerY,
      height,
      gap,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group, groupMember, width]);

  const onOpenModal = (e: MouseEvent<HTMLDivElement>) => {
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

  const {
    bigCircleWidth,
    centerX,
    centerY,
    height,
    mediumCircleWidth,
    smallCircleWidth,
    gap,
  } = layoutData;

  const ratio = isEven ? 3 : 10;
  const glierShiftX = 0.1 * bigCircleWidth;
  const glierShiftY = isEven ? -0.1 * bigCircleWidth : 0.1 * bigCircleWidth;
  return (
    <Box
      sx={{
        position: 'relative',
        width,
        height: height,
      }}
    >
      <MobileGlierCard
        width={bigCircleWidth}
        top={centerY + glierShiftX}
        left={centerX + glierShiftY}
        group={group}
        onClick={onOpenModal}
        id={glierData.id}
        image={glierData.image}
        name={glierData.name}
        years={glierData.years}
      />
      <MobileTeacherCard
        group={group}
        image={teacher?.image}
        width={mediumCircleWidth}
        left={isEven ? '2%' : `calc(96% - ${mediumCircleWidth}px)`}
        top={centerY - bigCircleWidth + mediumCircleWidth / 2 - ratio * gap}
        name={teacher?.name}
        years={teacher?.years}
        onClick={onOpenModal}
        id={teacher?.id}
      />

      {members &&
        members.map((el, i) => (
          <MobileStudentCard
            width={smallCircleWidth}
            group={group}
            top={el.y}
            left={el.x}
            onClick={onOpenModal}
            id={el.id}
            name={el.name}
            years={el.years}
            key={i}
          />
        ))}
      <Modal open={isOpen} onClose={onCloseModal}>
        <Box>
          <InfoCard
            person={modalData.find((item) => item.id === shownPerson)}
            onClose={onCloseModal}
          />
        </Box>
      </Modal>
    </Box>
  );
};
