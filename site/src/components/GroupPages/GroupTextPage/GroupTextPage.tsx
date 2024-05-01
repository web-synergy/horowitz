import { FC } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { PortableTextBlock } from '@portabletext/types';
import PageTemplate from '@/components/Common/PageTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';

interface GroupTextPageProps {
  title: string;
  data: PortableTextBlock[] | null;
  goBackLink: string;
}

const GroupTextPage: FC<GroupTextPageProps> = ({ title, data, goBackLink }) => {
  return (
    <>
      <PageTemplate>
        <Container>
          <Typography variant="h1">{title}</Typography>
          <Box>{data && <PortableComponent data={data} />}</Box>
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} />
    </>
  );
};

export default GroupTextPage;
