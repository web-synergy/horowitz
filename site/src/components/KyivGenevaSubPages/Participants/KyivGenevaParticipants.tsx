import { Container, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { participantsData } from '@/assets/kyiv-geneva/KyivGenevaParticipants';
import GridTemplate from '@/components/Templates/GridTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import Participant from './Participant';

const KyivGenevaParticipants = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTemplate>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 3, md: 5, lg: 6 },
          }}
        >
          <Typography component={'h1'} variant="h1">
            {t(`navigation.${Routes.KYIV_GENEVA_PARTICIPANTS}`)}
          </Typography>
          <GridTemplate list={participantsData} gridItem={Participant} />
        </Container>
      </PageTemplate>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </>
  );
};

export default KyivGenevaParticipants;
