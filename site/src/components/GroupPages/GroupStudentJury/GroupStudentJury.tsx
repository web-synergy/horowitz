import { FC } from 'react';
import { Container, Typography, Stack } from '@mui/material';
import { ParticipantType } from '@/types/groupTypes';

import PageTemplate from '@/components/Common/PageTemplate';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import StudentJuryCard from './parts/StudentJuryCard';

interface GroupStudentJuryProps {
  title: string;
  data: ParticipantType[] | null;
  desc?: string;
  goBackLink: string;
}

const GroupStudentJury: FC<GroupStudentJuryProps> = ({
  title,
  data,
  goBackLink,
  desc,
}) => {
  console.log(data);

  return (
    <>
      <PageTemplate goBackUrl={goBackLink}>
        <Container>
          <CommonStackWrapper>
            <Typography variant="h1">{title}</Typography>
            {desc && <Typography component="p">{desc}</Typography>}
            {data && (
              <Stack gap={7}>
                {data.map((item) => (
                  <StudentJuryCard key={item.id} {...item} />
                ))}
              </Stack>
            )}
          </CommonStackWrapper>
        </Container>
      </PageTemplate>
    </>
  );
};

export default GroupStudentJury;
