import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { Box, Button, Container, Typography } from '@mui/material';
import Loader from '../Common/Loader';
import PageTemplate from '../Common/PageTemplate';

import { useHorowitzStore } from '@/store/horowitzStore';
import LiteratureSection from './parts/LiteratureSection';
import QuoteSection from './parts/QuoteSection';
import TextBlockSection from './parts/TextBlockSection.tsx';
import { Buttons } from '@/types/translation.d';
import { useLiveQuery } from '@sanity/preview-kit';
import { horowitzQuery } from '@/api/query.ts';
import MainBanner from '../Common/MainBanner.tsx';
const HorowitzPage: FC = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const { fetchHorowitzData, requestLang } = useHorowitzStore((state) => ({
    fetchHorowitzData: state.fetchHorowitzData,
    requestLang: state.requestLang,
  }));

  useEffect(() => {
    if (requestLang === language) return;
    fetchHorowitzData(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchHorowitzData, language]);

  const horowitzData = useHorowitzStore();

  const [
    {
      bannerData,
      quote,
      upperTextBlock,
      lowerTextBlock,
      literature,
      isLoading,
    },
  ] = useLiveQuery(horowitzData, horowitzQuery, {
    language,
  });

  const [isAllLiteratureVisible, setIsAllLiteratureVisible] = useState(false);

  const handleShowMore = () => {
    setIsAllLiteratureVisible(!isAllLiteratureVisible);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <PageTemplate>
      {bannerData && <MainBanner banner={bannerData} />}
      <Container>
        <Box
          sx={{
            paddingTop: { xs: 3, md: 5, lg: 6 },
            paddingBottom: { xs: 3, md: 5, lg: 6 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textTransform: 'uppercase',
              marginBottom: { xs: 3, md: 5, lg: 6 },
              textAlign: 'center',
            }}
          >
            {t(`navigation.${Routes.HOROWITZ}`)}
          </Typography>
          <TextBlockSection blocks={upperTextBlock} />
        </Box>
      </Container>
      {quote && <QuoteSection quote={quote} />}
      <Container>
        {lowerTextBlock && (
          <Box
            sx={{
              paddingTop: { xs: 3, md: 5, lg: 6 },
              paddingBottom: { xs: 3, md: 5, lg: 6 },
            }}
          >
            <TextBlockSection blocks={lowerTextBlock} />
          </Box>
        )}

        <Typography variant="subhead" sx={{ textAlign: 'left' }} gutterBottom>
          {t(`horowitzPage.literature`)}:
        </Typography>
        {literature && (
          <LiteratureSection
            literature={literature}
            isAllLiteratureVisible={isAllLiteratureVisible}
          />
        )}

        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            marginTop: '48px',
            marginBottom: { xs: '72px', md: '96px', lg: '120px' },
          }}
        >
          {isAllLiteratureVisible ? (
            <Button
              sx={{ width: '288px' }}
              variant="transparent"
              onClick={handleShowMore}
            >
              {t(`buttons.${Buttons.SHOW_LESS}`)}
            </Button>
          ) : (
            <Button
              sx={{ width: '288px' }}
              variant="transparent"
              onClick={handleShowMore}
              disabled={isAllLiteratureVisible}
            >
              {t(`buttons.${Buttons.SHOW_MORE}`)}
            </Button>
          )}
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default HorowitzPage;
