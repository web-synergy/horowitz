import { FC } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { PortableTextBlock } from '@portabletext/types';
import PageTemplate from '@/components/Common/PageTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import Reward from './parts/Reward';
import { RewardType } from '@/types/groupTypes';

interface GroupRewardsProps {
  title: string;
  prizes: PortableTextBlock[] | null;
  rewards: RewardType[] | null;
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
          {rewards && (
            <CommonStackWrapper>
              {rewards.map((reward) => (
                <Reward key={reward.id} {...reward} />
              ))}
            </CommonStackWrapper>
          )}
          {prizes && (
            <Box>
              <PortableComponent data={prizes} />
            </Box>
          )}
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} />
    </>
  );
};

export default GroupRewards;
