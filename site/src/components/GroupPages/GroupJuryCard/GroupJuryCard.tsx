import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { JuryType } from '@/types/groupTypes';
import GoBackBtn from '@/components/Common/GoBackBtn';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';

interface GroupJuryCardProps {
  jury: JuryType;
  goBackLink: string;
}

const GroupJuryCard: FC<GroupJuryCardProps> = ({ jury, goBackLink }) => {
  const { about, avatar, name } = jury;
  return (
    <>
      <PageTemplate>
        <Container>
          <CommonStackWrapper>
            <Typography variant="h1">{name}</Typography>
            <TextBlockComponent textArray={about} img={avatar} />
          </CommonStackWrapper>
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} />
    </>
  );
};

export default GroupJuryCard;
