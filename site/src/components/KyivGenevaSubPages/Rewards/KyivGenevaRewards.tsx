import { Box, Container, Stack, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';

import { Routes } from '@/types/routes.d';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import LinkGoBack from '@/components/Common/LinkGoBack';
import { KyivGeneva } from '@/types/translation.d';
import Breadcrumbs from '@/components/Common/Breadcrumbs';
interface IRewards {
  listStrong: string[];
  p: string;
  title: string;
  list: string[];
  h3: string;
}
const KyivGenevaRewards = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [data, setData] = useState<IRewards[]>([]);

  useEffect(() => {
    const pathData = `../../../assets/kyiv-geneva/KyivGenevaRewards/${language}.ts`;
    import(pathData).then(res => setData(res.default));
  }, [language]);

  return (
    <PageTemplate>
      <Container>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '60px', md: '80px', lg: '100px' },
            left: { xs: '16px', md: '40px', lg: '80px' },
            maxWidth: '100%',
            zIndex: 10,
          }}>
          <Breadcrumbs
            history={[
              {
                title: t(`navigation.${Routes.KYIV_GENEVA}`),
                href: `/${Routes.KYIV_GENEVA}`,
              },
            ]}
            title={t(`kyivGeneva.${Routes.KYIV_GENEVA_REWARDS}`)}
            mode='dark'
          />
        </Box>
        <Box sx={{ my: { xs: '48px', lg: '120px' } }}>
          <Typography
            sx={{ mb: { xs: '24px', lg: '48px' } }}
            component={'h1'}
            variant='h1'>
            {t(`kyivGeneva.${Routes.KYIV_GENEVA_REWARDS}`)}
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

          <Box sx={{ mt: '48px' }}>
            <LinkGoBack
              title={t(`kyivGeneva.${KyivGeneva.GO_KYIV_GENEVA}`)}
              href={`/${Routes.KYIV_GENEVA}`}
            />
          </Box>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaRewards;
