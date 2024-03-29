import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import JuryListItem from '../Common/JuryListItem';
import { Routes } from '@/types/routes.d';
import { content } from '@/assets/kyiv-geneva/KyivGenevaPreselectionJury';
import GridTemplate from '@/components/Templates/GridTemplate';

const KyivGenevaPreselectionJuryList = () => {
  const { t } = useTranslation();
  return (
    <PageTemplate goBackUrl={Routes.KYIV_GENEVA}>
      <Container>
        <Typography variant="h1" mb={{ xs: 3, md: 5, lg: 6 }}>
          {t(`navigation.${Routes.KYIV_GENEVA_SELECTION_JURY}`)}
        </Typography>

        <GridTemplate list={content.list} gridItem={JuryListItem} />
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaPreselectionJuryList;
