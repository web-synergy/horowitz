import { Box, Container, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import PageTemplate from '@/components/Common/PageTemplate';

import GoBackBtn from '@/components/Common/GoBackBtn';

import { Routes } from '@/types/routes.d';
import { rewardsData } from '@/assets/kyiv-geneva/KyivGenevaRewards';

const KyivGenevaRewards = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const data = rewardsData[language];

  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 3, md: 6 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Typography
          sx={{ mb: { xs: '24px', lg: '48px' } }}
          component={'h1'}
          variant='h1'>
          {t(`navigation.${Routes.KYIV_GENEVA_REWARDS}`)}
        </Typography>
        {data.map((item, index) => (
          <Stack spacing={{ xs: '24px', lg: '48px' }} key={index}>
            <Box>
              {item.h3 && (
                <Typography component={'h3'} variant='h3'>
                  {item.h3}
                </Typography>
              )}
              {item.p && (
                <Typography
                  sx={{
                    mt: '24px',
                    mb: { xs: '24px', lg: '48px' },
                  }}
                  component={'p'}
                  variant='bodyRegular'>
                  {item.p}
                </Typography>
              )}
            </Box>
            {item.listStrong?.map(obj =>
              Object.entries(obj).map(([key, value]) => (
                <Stack key={value}>
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    component={'p'}
                    variant='bodyRegular'>
                    <Typography variant='bodyMedium'>{key}</Typography>
                    {value}
                  </Typography>
                </Stack>
              ))
            )}
            {item.list?.map((item, index) => (
              <Typography
                sx={{ textAlign: 'justify' }}
                component={'p'}
                key={index}
                variant='bodyRegular'>
                {item}
              </Typography>
            ))}
          </Stack>
        ))}
      </Container>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaRewards;
