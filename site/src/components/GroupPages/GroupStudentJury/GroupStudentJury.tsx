import { FC } from 'react';
import { Container, Typography, Stack } from '@mui/material';
import { StudentsJuryType } from '@/types/groupTypes';

import PageTemplate from '@/components/Common/PageTemplate';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import StudentJuryCard from './parts/StudentJuryCard';

interface GroupStudentJuryProps {
  title: string;
  data: StudentsJuryType[] | null;
  goBackLink: string;
}

const GroupStudentJury: FC<GroupStudentJuryProps> = ({
  title,
  data,
  goBackLink,
}) => {
  return (
    <>
      <PageTemplate goBackUrl={goBackLink}>
        <Container>
          <CommonStackWrapper>
            <Typography variant="h1">{title}</Typography>
            {data && (
              <Stack gap={8}>
                {data.map((item) => (
                  <StudentJuryCard key={item._key} {...item} />
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
