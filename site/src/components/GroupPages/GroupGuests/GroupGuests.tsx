import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { GuestType } from '@/types/groupTypes';
import PageTemplate from '@/components/Common/PageTemplate';
import GridTemplate from '@/components/Templates/GridTemplate';
import GuestsGridItem from './parts/GuestsGridItem';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';

interface GroupGuestsProps {
  title: string;
  goBackLink: string;
  guests: GuestType[] | null;
}

const GroupGuests: FC<GroupGuestsProps> = ({ goBackLink, guests, title }) => {
  return (
    <PageTemplate goBackUrl={goBackLink}>
      <Container>
        <CommonStackWrapper>
          <Typography variant="h1">{title}</Typography>
          {guests && <GridTemplate gridItem={GuestsGridItem} list={guests} />}
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  );
};

export default GroupGuests;
