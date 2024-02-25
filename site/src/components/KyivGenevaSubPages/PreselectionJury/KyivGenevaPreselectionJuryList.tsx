import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import JuryList from '../Common/JuryList/JuryList';
import GoBackBtn from '@/components/Common/GoBackBtn';
import { Routes } from '@/types/routes.d';
import { content } from '@/assets/kyiv-geneva/KyivGenevaPreselectionJury';

const KyivGenevaPreselectionJuryList = () => {
  const { t } = useTranslation();
  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 3, md: 6 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Typography variant="h1" mb={{ xs: 3, lg: 6 }}>
          {t(`navigation.${Routes.KYIV_GENEVA_SELECTION_JURY}`)}
        </Typography>

        <JuryList juryList={content.list} />
      </Container>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaPreselectionJuryList;
