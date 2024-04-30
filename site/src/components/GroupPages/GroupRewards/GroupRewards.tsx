import { FC } from 'react';
import { Container, Typography, Stack } from '@mui/material';
import { RewardsType } from '@/types/groupTypes';
import { PortableTextBlock } from '@portabletext/types';
import PageTemplate from '@/components/Common/PageTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import Reward from './parts/Reward';

interface GroupRewardsProps {
  title: string;
  prizes: PortableTextBlock[] | null;
  rewards: RewardsType[] | null;
  goBackLink: string;
}
const GroupRewards: FC<GroupRewardsProps> = ({
  title,
  prizes,
  rewards,
  goBackLink,
}) => {
  return (
    <>
      <PageTemplate>
        <Container>
          <Typography variant="h1" mb={{ xs: 3, md: 5, lg: 6 }}>
            {title}
          </Typography>
          <Stack rowGap={{ xs: 8, md: 5, lg: 6 }}>
            {rewards &&
              rewards.map((reward) => (
                <Reward key={reward.title} {...reward} />
              ))}
          </Stack>
          {prizes && <PortableComponent data={prizes} />}
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} />
    </>
  );
};

export default GroupRewards;
