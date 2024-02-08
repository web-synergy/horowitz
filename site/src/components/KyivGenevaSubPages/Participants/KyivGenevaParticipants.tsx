import { Box, Container, Grid, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import LinkGoBack from '../Common/LinkGoBack';
import { Buttons } from '@/types/translation.d';
import { participantsData } from '@/assets/kyiv-geneva/KyivGenevaParticipants';
import ImagePerson from '../Common/ImagePerson';

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
        }}>
        <Typography component={'h1'} variant='h1'>
          {t(`navigation.${Routes.KYIV_GENEVA_WINNERS}`)}
        </Typography>
        <Grid container rowGap={{ xs: '24px', lg: '48px' }} gap={'24px'}>
          {participantsData.map(item => (
            <Grid xs={12} md={5.7} lg={3.8} item>
              <ImagePerson img={item.img} />
              <Typography
                variant='subhead'
                component={'p'}
                sx={{
                  margin: '24px 0px 16px',
                }}>
                {language === 'ua' ? item.fullName.ua : item.fullName.en}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: { xs: '24px', lg: 0 } }}>
          <LinkGoBack
            title={t(`buttons.${Buttons.GO_KYIV_GENEVA}`)}
            href={`/${Routes.KYIV_GENEVA}`}
          />
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaParticipants;
