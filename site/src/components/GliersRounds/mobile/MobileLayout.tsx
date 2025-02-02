import { RoundMemberData } from '@/libs/mockedData';

import { MobileGroupLayout } from './MobileGroupLayout';

interface MobileLayoutProps {
  width: number;
  members: RoundMemberData[];
}

export const MobileLayout = ({ width, members }: MobileLayoutProps) => {
  const firstGroupMember = members.filter((member) => member.group === 1);
  const secondGroupMember = members.filter((member) => member.group === 2);

  return (
    <>
      <MobileGroupLayout
        group={1}
        groupMember={firstGroupMember}
        width={width}
      />
      <MobileGroupLayout
        group={2}
        groupMember={secondGroupMember}
        width={width}
      />
    </>
  );
};
