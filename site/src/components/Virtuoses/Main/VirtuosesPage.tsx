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
import { urlFor } from '@/config/sanity/imageUrl';

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

  const { virtuosos, fetchVirtuosos, requestLang } = useVirtuososStore(
    state => ({
      virtuosos: state.virtuosos,
      fetchVirtuosos: state.fetchVirtuosos,
      requestLang: state.requestLang,
    })
  );

  useEffect(() => {
    if (requestLang === language) return;
    fetchVirtuosos(language);
  }, [language]);

  const [data] = useLiveQuery(virtuosos, virtuososQuery, {
    language,
  });
  if (virtuosos)
    return (
      <PageTemplate>
        <Box
          sx={{
            width: '100%',
            height: '50vw',
            maxHeight: '50vh',
            objectFit: 'cover',
          }}
          src={urlFor(virtuosos.banner)
            .width(1920)
            .height(880)
            .auto('format')
            .fit('fill')
            .url()
            .toString()}
          component={'img'}></Box>
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: { xs: '24px', md: '48px' },
              mt: { xs: '24px', md: '32px' },
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
              <ArticleSection article={data.article} />
              <ImagesArray value={data.gallery} />
            </>
          )}
        </Container>
      </PageTemplate>
    );
};

export default VirtuosesPage;
