import { MouseEvent } from 'react';
import { RoundMemberData } from '@/libs/mockedData';
import { CirclesType } from '@/utils/arrangeTabletCircles';

import { TeacherCard } from './TeacherCard';
import { StudentCard } from './StudentCard';

interface MemberProps extends RoundMemberData, CirclesType {
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export const Member = (memberProps: MemberProps) => {
  const isTeacher = memberProps.isTeacher;
  return (
    <>
      {isTeacher ? (
        <TeacherCard {...memberProps} />
      ) : (
        <StudentCard {...memberProps} />
      )}
    </>
  );
};
