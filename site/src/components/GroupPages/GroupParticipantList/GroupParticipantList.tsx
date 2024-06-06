import { FC } from 'react';
import { ParticipantType } from '@/types/groupTypes';
import { Container, Typography } from '@mui/material';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import PageTemplate from '@/components/Common/PageTemplate';
import GridTemplate from '@/components/Templates/GridTemplate';
import ParticipantItem from './parts/ParticipantItem';

interface GroupParticipantListProps {
  list: ParticipantType[] | null;
  goBackHref: string;
  title: string;
}

const GroupParticipantList: FC<GroupParticipantListProps> = ({
  goBackHref,
  list,
  title,
}) => {
  return (
    <PageTemplate goBackUrl={goBackHref}>
      <Container>
        <CommonStackWrapper>
          <Typography variant={'h1'}>{title}</Typography>
          {list && <GridTemplate list={list} gridItem={ParticipantItem} />}
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  );
};

export default GroupParticipantList;
