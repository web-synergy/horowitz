import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import imageEn from '@/assets/images/kyiv-geneva/sponsors/partners_eng.png';
import imageUa from '@/assets/images/kyiv-geneva/sponsors/partners_ukr.png';

const KyivGenevaSponsorsPage = () => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 6, lg: 15 }, pb: { xs: 9, md: 12, lg: 15 } }}>
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
    </PageTemplate>
  );
};

export default KyivGenevaSponsorsPage;
