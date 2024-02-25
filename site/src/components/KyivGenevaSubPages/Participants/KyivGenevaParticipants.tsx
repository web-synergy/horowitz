import { Container, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { participantsData } from '@/assets/kyiv-geneva/KyivGenevaParticipants';
import GridTemplate from '@/components/Common/GridTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import Participant from './Participant';

const KyivGenevaParticipants = () => {
  const { t } = useTranslation();
  return (
    <PageTemplate>
      <Container
        sx={{
          pt: { xs: 3, md: 6 },
          pb: { xs: 9, md: 12, lg: 15 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '24px', lg: '48px' },
        }}
      >
        <Typography component={'h1'} variant="h1">
          {t(`navigation.${Routes.KYIV_GENEVA_PARTICIPANTS}`)}
        </Typography>
        <GridTemplate list={participantsData} gridItem={Participant} />
      </Container>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaParticipants;
