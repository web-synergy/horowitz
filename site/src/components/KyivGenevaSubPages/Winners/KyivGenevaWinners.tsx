import { Box, Container, Grid, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { Routes } from '@/types/routes.d';
import { useTranslation } from 'react-i18next';
import { winnersData } from '@/assets/kyiv-geneva/KyivGenevaWinners';
import GoBackBtn from '@/components/Common/GoBackBtn';
import ImagePerson from '../Common/ImagePerson';

const KyivGenevaWinners = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const data = {
    mainImg: winnersData.mainImag,
    winners: winnersData.winners[language],
  };
  return (
    <PageTemplate>
      <Container
        sx={{
          pt: { xs: 3, lg: 6 },
          pb: { xs: 9, md: 12, lg: 15 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '24px', lg: '48px' },
        }}>
        <Typography component={'h1'} variant='h1'>
          {t(`navigation.${Routes.KYIV_GENEVA_WINNERS}`)}
        </Typography>
        <Grid container justifyContent={'center'} gap={'24px'}>
          {data.winners.map((winner, index) => (
            <Grid key={index} xs={12} md={5.8} lg={3.8} item>
              <ImagePerson alt={winner.fullName} img={winner.img} />
              <Typography
                variant='subhead'
                component={'p'}
                sx={{
                  margin: '24px 0px 16px',
                }}>
                {winner.fullName}
              </Typography>
              <Typography
                variant='bodyRegular'
                component={'p'}
                sx={{
                  color: theme => theme.palette.action.focus,
                  width: '100%',
                }}>
                {winner.prizePlace}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box width={'100%'} src={data.mainImg} component={'img'} />
      </Container>
      <GoBackBtn href={`/${Routes.KYIV_GENEVA}`} />
    </PageTemplate>
  );
};

export default KyivGenevaWinners;
