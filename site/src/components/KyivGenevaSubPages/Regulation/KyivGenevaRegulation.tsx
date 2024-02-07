import { Box, Container, Stack, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { regulationData } from '@/assets/kyiv-geneva/KyivGenevaRegulation';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import LinkGoBack from '@/components/Common/LinkGoBack';
import { KyivGeneva } from '@/types/translation.d';
import { useEffect } from 'react';

const Title = styled(Typography)(() => ({
  display: 'block',
}));
const Text = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
}));

const KyivGenevaRegulation = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const data = regulationData[language];
  return (
    <PageTemplate>
      <Container>
        <Box sx={{ my: { xs: '48px', lg: '120px' } }}>
          <Typography component={'h1'} variant='h1'>
            {t(`kyivGeneva.${Routes.KYIV_GENEVA_REQUIREMENTS}`)}
          </Typography>

          <Stack sx={{ my: '48px' }} direction={'column'} spacing={'48px'}>
            {data.map(item => (
              <Stack direction={'column'} spacing={'48px'}>
                <Stack direction={'column'} spacing={'24px'}>
                  <Title variant='h3'>{item.title}</Title>

                  {item.rules.map(item => (
                    <Text variant='bodyRegular'>{item}</Text>
                  ))}
                </Stack>
                {item.date.map(item => (
                  <Stack direction={'column'} spacing={'24px'}>
                    <Text variant='bodyMedium'>{item.day}</Text>
                    {item.description.map(item => (
                      <Text variant='bodyRegular'>{item}</Text>
                    ))}
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
          <Box sx={{ mt: { xs: '48px', lg: '62px' } }}>
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

export default KyivGenevaRegulation;
