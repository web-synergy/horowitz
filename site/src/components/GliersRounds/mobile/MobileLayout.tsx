import { RoundMemberData } from '@/libs/mockedData';

import { MobileGroupLayout } from './MobileGroupLayout';

interface MobileLayoutProps {
  width: number;
  members: RoundMemberData[];
}

export const MobileLayout = ({ width, members }: MobileLayoutProps) => {
  const firstGroupMember = members.filter((member) => member.group === 1);
  const secondGroupMember = members.filter((member) => member.group === 2);
  const glier = members[0];

  return (
    <>
      <MobileGroupLayout
        group={1}
        groupMember={firstGroupMember}
        width={width}
        glierData={glier}
      />
      <MobileGroupLayout
        group={2}
        groupMember={secondGroupMember}
        width={width}
        glierData={glier}
      />
    </>
  );
};
