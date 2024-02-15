import { useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import PageTemplate from '../Common/PageTemplate';
import { useAdministrationStore } from '@/store/administrationStore';
import { Routes } from '@/types/routes.d';
import BannerComponent from './parts/BannerComponent';
import MemberCardItem from './parts/MemberCardItem';
import Loader from '../Common/Loader';
import { useLiveQuery } from '@sanity/preview-kit';
import { administrationQuery } from '@/api/query';

const AdministrationPage = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const { fetchAdministrationData, data, requestLang } = useAdministrationStore(
    state => ({
      fetchAdministrationData: state.fetchAdministrationData,
      data: state.administrationData,
      requestLang: state.requestLang,
    })
  );

  useEffect(() => {
    if (requestLang === language) return;
    fetchAdministrationData(language);
  }, [fetchAdministrationData, language]);

  const [administrationDataLive, isLoading] = useLiveQuery(
    data,
    administrationQuery,
    {
      language,
    }
  );
  const administrationData = administrationDataLive?.members;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageTemplate>
      <BannerComponent />
      <Container
        sx={{
          paddingTop: { xs: '48px', lg: '120px' },
          paddingBottom: { xs: '72px', md: '96px', lg: '120px' },
        }}>
        <Typography
          sx={{
            marginBottom: { xs: '24px', md: '48px' },
            textAlign: 'center',
          }}
          variant='h1'
          gutterBottom>
          {t(`navigation.${Routes.ADMINISTRATION}`)}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing='48px' columnSpacing={{ md: '26px' }}>
            {administrationData &&
              administrationData.map((member, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <MemberCardItem member={member} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default AdministrationPage;
