import { Routes } from '@/types/routes.d';
import PageTemplate from '../../Common/PageTemplate';
import { Box, Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useVirtuososStore } from '@/store/virtuososStor';
import { useEffect } from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';

import { ImagesArray } from '../../Templates/PortableComponent/parts/ImageComponent';

import { useLiveQuery } from '@sanity/preview-kit';
import { virtuososQuery } from '@/api/query';

import MainBanner from '@/components/Common/MainBanner';
import Loader from '@/components/Common/Loader';
import NewsSwiper from '../../NewsSection/NewsSwiper';
import { Virtuosos } from '@/types/translation.d';
import { Link } from 'react-router-dom';

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
      <>
        <MainBanner banner={data.banner} />
        <PageTemplate>
          <Container>
            <Box
              sx={{
                my: 1,
                display: 'flex',
                gap: 1,
                flexDirection: { xs: 'column', md: 'row' },
              }}>
              <Button component={Link} to={'/pdf/sql'}>
                SQL
              </Button>
              <Button component={Link} to={'/pdf/Книжка'}>
                Книжка
              </Button>

              <Button component={Link} to={'/pdf/Буклет'}>
                Буклет
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
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
                  <NewsSwiper
                    title={t(`virtuosos.${Virtuosos.NEWS}`)}
                    link={Routes.VIRTUOSES_ARTICLE}
                    news={data.article}
                  />
                ) : null}
                <ImagesArray value={data.gallery} />
              </>
            )}
          </Container>
        </PageTemplate>
      </>
    );
};

export default VirtuosesPage;
