import { useEffect } from 'react';
import SeoComponent from '../Common/SEO';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import PageTemplate from '../Common/PageTemplate';
import { Container, Typography, Box } from '@mui/material';
import MainBanner from '../Templates/MainBanner/MainBanner';
import { horowitzThirtyPageQuery } from '@/api/query';
import { useHorowitzThirtyStore } from '@/store/horowitzThirtyStore';
import { useLiveQuery } from '@sanity/preview-kit';
import Loader from '../Common/Loader';
import PortableComponent from '../Templates/PortableComponent/PortableComponent';

const HorowitzThirty = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const { fetchHorowitzThirtyData, requestLang } = useHorowitzThirtyStore(
    (state) => ({
      fetchHorowitzThirtyData: state.fetchHorowitzThirtyData,
      requestLang: state.requestLang,
    })
  );

  useEffect(() => {
    if (requestLang === language) return;
    fetchHorowitzThirtyData(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchHorowitzThirtyData, language]);

  const aboutHorowitzThirtyData = useHorowitzThirtyStore();

  const [{ mainBanner, content, isLoading }] = useLiveQuery(
    aboutHorowitzThirtyData,
    horowitzThirtyPageQuery,
    {
      language,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  const title = t(`navigation.${Routes.HOROWITZ_THIRTY}`);
  return (
    <>
      <SeoComponent canonicalUrl={Routes.HOROWITZ_THIRTY} title={title} />
      <MainBanner banner={mainBanner} />
      <PageTemplate>
        <Container
          sx={{ marginBottom: { xs: 3, md: 5, lg: 6 } }}
          component="section"
        >
          <Typography
            variant="h1"
            sx={{
              textTransform: 'uppercase',
              marginBottom: { xs: 3, md: 5, lg: 6 },
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          <Box>{content && <PortableComponent data={content} />}</Box>
        </Container>
      </PageTemplate>
    </>
  );
};

export default HorowitzThirty;
