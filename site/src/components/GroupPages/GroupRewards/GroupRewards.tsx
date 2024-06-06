import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { PortableTextBlock } from '@portabletext/types';
import PageTemplate from '@/components/Common/PageTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';

interface GroupRewardsProps {
  title: string;
  rewards: PortableTextBlock[] | null;
  goBackLink: string;
}
const GroupRewards: FC<GroupRewardsProps> = ({
  title,

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
          {rewards && <PortableComponent data={rewards} />}
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} />
    </>
  );
};

export default GroupRewards;
