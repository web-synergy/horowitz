import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import PageTemplate from '@/components/Common/PageTemplate';
import GridTemplate from '@/components/Templates/GridTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import GroupJuryItem from './parts/GroupJuryItem';
import { JuryType } from '@/types/groupTypes';

interface JuryListProps {
  title: string;
  goBackLink: string;
  juryList: JuryType[] | null;
}

const GroupJuryList: FC<JuryListProps> = ({ title, goBackLink, juryList }) => {
  return (
    <>
      <PageTemplate>
        <Container>
          <CommonStackWrapper>
            <Typography variant="h1">{title}</Typography>
            {juryList && (
              <GridTemplate gridItem={GroupJuryItem} list={juryList} />
            )}
          </CommonStackWrapper>
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} />
    </>
  );
};

export default GroupJuryList;
