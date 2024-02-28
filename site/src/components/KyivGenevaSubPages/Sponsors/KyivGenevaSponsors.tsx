import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import imageEn from '@/assets/images/kyiv-geneva/sponsors/partners_eng.webp';
import imageUa from '@/assets/images/kyiv-geneva/sponsors/partners_ukr.webp';
import GoBackBtn from '@/components/Common/GoBackBtn';
import { Routes } from '@/types/routes.d';
import GrowView from '@/components/Common/GrowView';

const KyivGenevaSponsorsPage = () => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <PageTemplate>
      <GrowView>
        <Container sx={{ pt: { xs: 3, lg: 6 }, pb: { xs: 9, md: 12, lg: 15 } }}>
          <Box
            component="img"
            src={language === 'ua' ? imageUa : imageEn}
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',

              transform: 'scale(1.05)',
            }}
          />
        </Container>
      </GrowView>

      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaSponsorsPage;
