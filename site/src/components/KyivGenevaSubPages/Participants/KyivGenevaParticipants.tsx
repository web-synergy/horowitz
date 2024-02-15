import { Container, Grid, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { participantsData } from '@/assets/kyiv-geneva/KyivGenevaParticipants';
import ImagePerson from '../Common/ImagePerson';
import GoBackBtn from '@/components/Common/GoBackBtn';

const KyivGenevaParticipants = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <PageTemplate>
      <Container
        sx={{
          pt: { xs: 6, lg: 15 },
          pb: { xs: 9, md: 12, lg: 15 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '24px', lg: '48px' },
        }}
      >
        <Typography component={'h1'} variant="h1">
          {t(`navigation.${Routes.KYIV_GENEVA_PARTICIPANTS}`)}
        </Typography>
        <Grid container rowGap={{ xs: '24px', lg: '48px' }} gap={'24px'}>
          {participantsData.map((item, index) => (
            <Grid key={index} xs={12} md={5.7} lg={3.8} item>
              <ImagePerson img={item.img} />
              <Typography
                variant="subhead"
                component={'p'}
                sx={{
                  margin: '24px 0px 16px',
                }}
              >
                {language === 'ua' ? item.fullName.ua : item.fullName.en}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaParticipants;
