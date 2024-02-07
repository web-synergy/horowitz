import { Container, Box } from '@mui/material';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import Jury from '../Common/Jury/Jury';
import { Routes } from '@/types/routes.d';
import { content } from '@/assets/kyiv-geneva/KyivGenevaPreselectionJury';
import { Buttons } from '@/types/translation.d';
import LinkGoBack from '../Common/LinkGoBack';

const KyivGenevaPreselectionJury = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const juryData = content.list.find((item) => item.id === id);

  if (!juryData) {
    return <Navigate to={'/404'} />;
  }

  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 6, lg: 15 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Box sx={{ mb: 6 }}>
          <Jury jury={juryData} />
        </Box>

        <LinkGoBack
          href={`/${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_SELECTION_JURY}`}
          title={t(`buttons.${Buttons.GO_KG_SEL_JURY}`)}
        />
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaPreselectionJury;
