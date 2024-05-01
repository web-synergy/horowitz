import PageTemplate from '@/components/Common/PageTemplate';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import { urlFor } from '@/config/sanity/imageUrl';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { Box, Container, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Routes } from '@/types/routes.d';
import { SummerSchool } from '@/types/translation.d';

const CurrentConcert = () => {
  const { currentConcert, getCurrentConcert, concerts } =
    useAnnualSummerSchoolStore();
  const { key } = useParams();

  useEffect(() => {
    if (key) getCurrentConcert(key);
  }, [key, concerts]);
  if (currentConcert)
    return (
      <PageTemplate goBackUrl={Routes.SUMMER_SCHOOL_CONCERTS}>
        <Container>
          <Typography
            sx={{
              mb: { xs: '24px', md: '40px', lg: '48px' },
            }}
            variant='h1'>
            {t(`summerSchool.${SummerSchool.CONCERT_PROGRAM}`)}
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} gap={'24px'}>
            <Box
              component='img'
              src={urlFor(currentConcert?.img).toString()}
              sx={{
                objectFit: 'cover',
                width: { xs: '100%', md: '50%' },
                height: 'auto',
              }}></Box>
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                '*:first-of-type': {
                  marginTop: '0px',
                },
              }}>
              <PortableComponent data={currentConcert.concertPrograms} />
            </Box>
          </Stack>
        </Container>
      </PageTemplate>
    );
};
export default CurrentConcert;
