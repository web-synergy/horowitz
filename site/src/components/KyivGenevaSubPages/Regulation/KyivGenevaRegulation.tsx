import { Container, Stack, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { regulationData } from '@/assets/kyiv-geneva/KyivGenevaRegulation';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import GoBackBtn from '@/components/Common/GoBackBtn';

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

  const data = regulationData[language];
  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 3, md: 6 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Typography component={'h1'} variant='h1'>
          {t(`navigation.${Routes.KYIV_GENEVA_TIMETABLE}`)}
        </Typography>

        <Stack sx={{ mt: '48px' }} direction={'column'} spacing={'48px'}>
          {data.map(item => (
            <Stack direction={'column'} spacing={{ xs: '24px', md: '48px' }}>
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
      </Container>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaRegulation;
