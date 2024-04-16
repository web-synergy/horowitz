import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { Box, Container, Typography, Stack } from '@mui/material';
import Loader from '../Common/Loader';
import PageTemplate from '../Common/PageTemplate';

import { useAboutCompetitionStore } from '@/store/aboutCompetitionStore';

import TextBlockSection from './parts/TextBlockSection.tsx';
import ImageComponent from '../Templates/ImageComponent/ImageComponent.tsx';
import PortableComponent from '../Templates/PortableComponent/PortableComponent.tsx';
import { useLiveQuery } from '@sanity/preview-kit';
import { aboutCompetitionQuery } from '@/api/query.ts';
import MainBanner from '../Common/MainBanner.tsx';

const AboutPage = () => {
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
      additionalText,
      isLoading,
    },
  ] = useLiveQuery(aboutCompetitionData, aboutCompetitionQuery, {
    language,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {mainBanner && <MainBanner banner={mainBanner} />}
      <PageTemplate>
        <Container>
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
          <Stack direction="column" gap={{ xs: 3, md: 5, lg: 6 }}>
            <TextBlockSection blocks={upperTextBlock} />
            {imgHistoryOne && <ImageComponent image={imgHistoryOne} />}
            {middleTextBlock && <TextBlockSection blocks={middleTextBlock} />}
            {imgHistoryTwo && <ImageComponent image={imgHistoryTwo} />}
            {lowerTextBlock && <TextBlockSection blocks={lowerTextBlock} />}
            {imgStatistics && <ImageComponent image={imgStatistics} />}
            <Box>
              {additionalText && <PortableComponent data={additionalText} />}
            </Box>
          </Stack>
        </Container>
      </PageTemplate>
    </>
  );
};

export default AboutPage;
