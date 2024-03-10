import { Box, Container, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import PageTemplate from '@/components/Common/PageTemplate';

import { Routes } from '@/types/routes.d';
import { rewardsData } from '@/assets/kyiv-geneva/KyivGenevaRewards';

const KyivGenevaRewards = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const data = rewardsData[language];

  return (
    <PageTemplate goBackUrl={Routes.KYIV_GENEVA}>
      <Container>
        <Typography
          sx={{ mb: { xs: 3, md: 5, lg: 6 } }}
          component={'h1'}
          variant="h1"
        >
          {t(`navigation.${Routes.KYIV_GENEVA_REWARDS}`)}
        </Typography>
        {data.map((item, index) => (
          <>
            {item.h3 && (
              <Typography
                component={'h3'}
                variant="h3"
                mb={{ xs: 3, md: 5, lg: 6 }}
              >
                {item.h3}
              </Typography>
            )}

            <Box>
              {item.p && (
                <Typography
                  sx={{
                    mb: { xs: '24px', lg: '48px' },
                  }}
                  component={'p'}
                  variant="bodyRegular"
                >
                  {item.p}
                </Typography>
              )}
            </Box>
            <Stack gap={2} key={index}>
              {item.listStrong?.map((obj) =>
                Object.entries(obj).map(([key, value]) => (
                  <Stack key={value}>
                    <Typography
                      sx={{ textAlign: 'justify' }}
                      component={'p'}
                      variant="bodyRegular"
                    >
                      <Typography variant="bodyMedium">{key}</Typography>
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
                  variant="bodyRegular"
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </>
        ))}
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaRewards;
