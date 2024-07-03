import { useEffect, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { Box, Container, Typography, Stack } from '@mui/material';
import { PortableText } from '@portabletext/react';

import { useAboutCompetitionStore } from '@/store/aboutCompetitionStore';
import { useLiveQuery } from '@sanity/preview-kit';
import { aboutCompetitionQuery } from '@/api/query.ts';
import { components } from '@/components/Templates/PortableComponent/parts/components.tsx';

import MainBanner from '../Templates/MainBanner/MainBanner.tsx';
import ImageComponent from '../Templates/ImageComponent/ImageComponent.tsx';
import PortableComponent from '../Templates/PortableComponent/PortableComponent.tsx';
import Loader from '../Common/Loader';
import PageTemplate from '../Common/PageTemplate';
import SeoComponent from '../Common/SEO.tsx';

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

  const [{ mainBanner, blocks, additionalText, isLoading }] = useLiveQuery(
    aboutCompetitionData,
    aboutCompetitionQuery,
    {
      language,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  const title = t(`navigation.${Routes.DETAILS}`);

  return (
    <>
      <SeoComponent canonicalUrl={Routes.DETAILS} title={title} />
      <MainBanner banner={mainBanner} />
      <PageTemplate>
        <Container>
          <Box
            sx={{
              marginBottom: { xs: 3, md: 5, lg: 6 },
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            <Typography variant="h1">{title}</Typography>
          </Box>
          <Stack direction="column" gap={{ xs: 3, md: 5, lg: 6 }}>
            {blocks.map((item, index) => (
              <Fragment key={index}>
                <Box sx={{ columnCount: { xs: 1, lg: 2 } }}>
                  <PortableText
                    value={item.textBlock}
                    components={components}
                  />
                </Box>

                <ImageComponent image={item.imageBlock} />
              </Fragment>
            ))}
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
