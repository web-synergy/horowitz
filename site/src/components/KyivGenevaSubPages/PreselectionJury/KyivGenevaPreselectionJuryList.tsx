import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import JuryList from '../Common/JuryList/JuryList';
import LinkGoBack from '../Common/LinkGoBack';
import { Routes } from '@/types/routes.d';
import { content } from '@/assets/kyiv-geneva/KyivGenevaPreselectionJury';
import { Buttons } from '@/types/translation.d';

const KyivGenevaPreselectionJuryList = () => {
  const { t } = useTranslation();
  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 6, lg: 15 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Typography variant="h1" mb={{ xs: 3, lg: 6 }}>
          {t(`navigation.${Routes.KYIV_GENEVA_SELECTION_JURY}`)}
        </Typography>
        <Box sx={{ mb: 6 }}>
          <JuryList juryList={content.list} />
        </Box>

        <LinkGoBack
          href={`/${Routes.KYIV_GENEVA}`}
          title={t(`buttons.${Buttons.GO_KYIV_GENEVA}`)}
        />
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaPreselectionJuryList;
