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
    <>
      <PageTemplate>
        <Container>
          <Typography component={'h1'} variant="h1">
            {t(`navigation.${Routes.KYIV_GENEVA_TIMETABLE}`)}
          </Typography>

          <Stack
            sx={{ mt: { xs: 3, md: 5, lg: 6 } }}
            direction={'column'}
            spacing={{ xs: 3, md: 5, lg: 6 }}
          >
            {data.map((item) => (
              <Stack direction={'column'} spacing={{ xs: 3, md: 5, lg: 6 }}>
                <Title variant="h3">{item.title}</Title>
                <Stack direction={'column'} spacing={2}>
                  {item.rules.map((item) => (
                    <Text variant="bodyRegular">{item}</Text>
                  ))}
                </Stack>

                {item.date.map((item) => (
                  <Stack direction={'column'} spacing={2}>
                    <Text variant="bodyMedium">{item.day}</Text>
                    {item.description.map((item) => (
                      <Text variant="bodyRegular">{item}</Text>
                    ))}
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Container>
      </PageTemplate>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </>
  );
};

export default KyivGenevaRegulation;
