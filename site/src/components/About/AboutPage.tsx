import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { Box, Container, Typography } from '@mui/material';
import Loader from '../Common/Loader';
import PageTemplate from '../Common/PageTemplate';

import { useAboutCompetitionStore } from '@/store/aboutCompetitionStore';
// import BannerComponent from './parts/BannerComponent';
import TextBlockSection from './parts/TextBlockSection.tsx';
import ImageSection from './parts/ImageSection.tsx';
import { useLiveQuery } from '@sanity/preview-kit';
import { aboutCompetitionQuery } from '@/api/query.ts';
import MainBanner from '../Common/MainBanner.tsx';

const AboutPage: FC = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const { fetchAboutCompetitionData, requestLang } = useAboutCompetitionStore(
    (state) => ({
      fetchAboutCompetitionData: state.fetchAboutCompetitionData,
      requestLang: state.requestLang,
    })
  );

  useEffect(() => {
    if (requestLang === language) return;
    fetchAboutCompetitionData(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAboutCompetitionData, language]);

  const aboutCompetitionData = useAboutCompetitionStore();

  const [
    {
      mainBanner,
      upperTextBlock,
      middleTextBlock,
      lowerTextBlock,
      imgHistoryOne,
      imgHistoryTwo,
      imgStatistics,
      isLoading,
    },
  ] = useLiveQuery(aboutCompetitionData, aboutCompetitionQuery, {
    language,
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <PageTemplate>
      {mainBanner && <MainBanner banner={mainBanner} />}
      <Container
        sx={{
          paddingTop: { xs: 3, md: 5, lg: 6 },
          paddingBottom: { xs: '72px', md: '96px', lg: '120px' },
        }}
      >
        <Box
          sx={{
            marginBottom: { xs: 3, md: 5, lg: 6 },
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          <Typography variant="h1">
            {t(`navigation.${Routes.DETAILS}`)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 3, md: 5, lg: 6 },
          }}
        >
          <TextBlockSection blocks={upperTextBlock} />
          {imgHistoryOne && <ImageSection image={imgHistoryOne} />}
          {middleTextBlock && <TextBlockSection blocks={middleTextBlock} />}
          {imgHistoryTwo && <ImageSection image={imgHistoryTwo} />}
          {lowerTextBlock && <TextBlockSection blocks={lowerTextBlock} />}
          {imgStatistics && <ImageSection image={imgStatistics} />}
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default AboutPage;
