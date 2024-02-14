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
  const { virtuosos, fetchVirtuosos } = useVirtuososStore(state => ({
    virtuosos: state.virtuosos[language],
    fetchVirtuosos: state.fetchVirtuosos,
  }));

  useEffect(() => {
    if (!virtuosos) {
      fetchVirtuosos(language);
    }
  }, [language]);
  const [data] = useLiveQuery(virtuosos, virtuososQuery, {
    language,
  });

  return (
    <PageTemplate>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
