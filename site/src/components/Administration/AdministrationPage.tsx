import { useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import PageTemplate from '../Common/PageTemplate';
import { useAdministrationStore } from '@/store/administrationStore';
import { Routes } from '@/types/routes.d';
import MemberCardItem from './parts/MemberCardItem';
import Loader from '../Common/Loader';
import { useLiveQuery } from '@sanity/preview-kit';
import { administrationQuery } from '@/api/query';
import MainBanner from '../Common/MainBanner';

const AdministrationPage = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const { fetchAdministrationData, data, requestLang } = useAdministrationStore(
    (state) => ({
      fetchAdministrationData: state.fetchAdministrationData,
      data: state.administrationData,
      requestLang: state.requestLang,
    })
  );

  useEffect(() => {
    if (requestLang === language) return;
    fetchAdministrationData(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAdministrationData, language]);

  const [administrationDataLive, isLoading] = useLiveQuery(
    data,
    administrationQuery,
    {
      language,
    }
  );
  const members = administrationDataLive?.members;
  const banner = administrationDataLive?.banner;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {banner && <MainBanner banner={banner} />}
      <PageTemplate>
        <Container>
          <Typography
            sx={{
              marginBottom: { xs: 3, md: 5, lg: 6 },
              textAlign: 'center',
            }}
            variant="h1"
            gutterBottom
          >
            {t(`navigation.${Routes.ADMINISTRATION}`)}
          </Typography>
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={{ xs: 3, md: 5, lg: 6 }}
              columnSpacing={{ md: '26px' }}
            >
              {members &&
                members.map((member, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <MemberCardItem member={member} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Container>
      </PageTemplate>
    </>
  );
};

export default AdministrationPage;
