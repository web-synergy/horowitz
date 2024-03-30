import PageTemplate from '@/components/Common/PageTemplate';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';

import { Container, Stack, Typography } from '@mui/material';
import ListItem from './ListItem';

import { t } from 'i18next';

import { useEffect, useState } from 'react';
import { Routes } from '@/types/routes.d';
import { useInView } from 'react-intersection-observer';

const Students = () => {
  const { participants } = useAnnualSummerSchoolStore();
  const [lastEl, setLastEl] = useState(10);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      setLastEl(prev => prev + 5);
    }
  }, [inView]);

  if (participants)
    return (
      <PageTemplate goBackUrl={Routes.SUMMER_SCHOOL}>
        <Container>
          <Typography sx={{ mb: '40px' }} variant='h1'>
            {t(`navigation.${Routes.KYIV_GENEVA_PARTICIPANTS}`)}
          </Typography>

          <Stack gap={'56px'}>
            {participants.slice(0, lastEl).map((item, index) => {
              if (index + 1 === lastEl) {
                return (
                  <div key={item._key} ref={ref}>
                    <ListItem {...item} />
                  </div>
                );
              }
              return (
                <div key={item._key}>
                  <ListItem {...item} />
                </div>
              );
            })}
          </Stack>
        </Container>
      </PageTemplate>
    );
};

export default Students;
