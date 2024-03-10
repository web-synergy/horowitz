import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import imageEn from '@/assets/images/kyiv-geneva/sponsors/partners_eng.webp';
import imageUa from '@/assets/images/kyiv-geneva/sponsors/partners_ukr.webp';
import GoBackBtn from '@/components/Common/GoBackBtn';
import { Routes } from '@/types/routes.d';
import PageTemplate from '@/components/Common/PageTemplate';
import Loader from '@/components/Common/Loader';

const KyivGenevaSponsorsPage = () => {
  const [loading, setLoading] = useState(true);

  const {
    i18n: { language },
  } = useTranslation();
  return (
    <>
      <PageTemplate>
        <Container>
          <Box sx={{ display: loading ? 'block' : 'none' }}>
            <Loader />
          </Box>
          <Box sx={{ display: loading ? 'none' : 'block' }}>
            <Box
              component="img"
              src={language === 'ua' ? imageUa : imageEn}
              onLoad={() => setLoading(false)}
              sx={{
                display: 'block',
                width: '100%',
                height: 'auto',
                transform:
                  language === 'ua'
                    ? 'scale(1.05)'
                    : 'scale(1.06) translate(0, 1%)',
              }}
            />
          </Box>
        </Container>
      </PageTemplate>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </>
  );
};

export default KyivGenevaSponsorsPage;
