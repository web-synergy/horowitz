import { Box, Container, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { Routes } from '@/types/routes.d';
import { useTranslation } from 'react-i18next';
import { winnersData } from '@/assets/kyiv-geneva/KyivGenevaWinners';
import GoBackBtn from '@/components/Common/GoBackBtn';
import Winner from './Winner';
import GridTemplate from '@/components/Common/GridTemplate';

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
          pt: { xs: 3, md: 5, lg: 6 },
          pb: { xs: 9, md: 12, lg: 15 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 3, md: 5, lg: 6 },
        }}
      >
        <Typography component={'h1'} variant="h1">
          {t(`navigation.${Routes.KYIV_GENEVA_WINNERS}`)}
        </Typography>
        <GridTemplate list={data.winners} gridItem={Winner} justify="center" />

        <Box width={'100%'} src={data.mainImg} component={'img'} />
      </Container>
      <GoBackBtn href={`/${Routes.KYIV_GENEVA}`} />
    </PageTemplate>
  );
};

export default KyivGenevaWinners;
