import { Routes } from '@/types/routes.d';
import PageTemplate from '../../Common/PageTemplate';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useVirtuososStore } from '@/store/virtuososStor';
import { useEffect } from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';

import { ImagesArray } from '../../NewsCurrentPage/prtableComponents/ImageComponent';
import ArticleSection from './parts/ArticleSection';
import { useLiveQuery } from '@sanity/preview-kit';
import { virtuososQuery } from '@/api/query';

import MainBanner from '@/components/Common/MainBanner';
import Loader from '@/components/Common/Loader';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        component={'p'}
        sx={{
          display: 'block',
          mb: { xs: '24px' },
          textAlign: 'justify',
        }}
        variant='bodyRegular'>
        {children}
      </Typography>
    ),
  },
};

const VirtuosesPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { virtuosos, fetchVirtuosos, requestLang, loading } = useVirtuososStore(
    state => ({
      virtuosos: state.virtuosos,
      fetchVirtuosos: state.fetchVirtuosos,
      requestLang: state.requestLang,
      loading: state.loading,
    })
  );

  useEffect(() => {
    if (requestLang === language) return;
    fetchVirtuosos(language);
  }, [language]);

  const [data] = useLiveQuery(virtuosos, virtuososQuery, {
    language,
  });

  if (loading) return <Loader />;

  if (data)
    return (
      <PageTemplate>
        <MainBanner banner={data.banner} />
        <Container sx={{ mb: { xs: 9, md: 12, lg: 15 } }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: '24px', md: '48px' },
              mb: { xs: '24px', lg: '48px' },
            }}>
            <Typography component={'h1'} variant='h1'>
              {t(`navigation.${Routes.VIRTUOSES}`)}
            </Typography>
          </Box>
          {data && (
            <>
              <Box
                sx={{
                  columnCount: { lg: 2 },
                  columnGap: { lg: 3 },
                }}>
                <PortableText
                  components={components}
                  value={data.description[0]}
                />
              </Box>
              {data.article.length ? (
                <ArticleSection article={data.article} />
              ) : null}
              <ImagesArray value={data.gallery} />
            </>
          )}
        </Container>
      </PageTemplate>
    );
};

export default VirtuosesPage;
