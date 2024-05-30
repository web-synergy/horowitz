import { useEffect } from 'react';

import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/types/routes.d';
import { useUkrWorksStore } from '@/store/ukrainianWorksStore';
import { ukrWorksQuery } from '@/api/query';
import { useLiveQuery } from '@sanity/preview-kit';
import PageTemplate from '../Common/PageTemplate';
import Loader from '../Common/Loader';
import SeoComponent from '../Common/SEO';
import MainBanner from '../Common/MainBanner';
import PortableComponent from '../Templates/PortableComponent/PortableComponent';

const UkrainianComposition = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { works, fetchWorks, requestLang, isLoading } = useUkrWorksStore();

  useEffect(() => {
    if (language === requestLang) return;

    fetchWorks(language);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const [data] = useLiveQuery(works, ukrWorksQuery, {
    language,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SeoComponent
        canonicalUrl={`/${Routes.UKRAINIAN_WORKS}`}
        title={t(`navigation.${Routes.UKRAINIAN_WORKS}`)}
      />
      {data && <MainBanner banner={data?.banner} />}

      <PageTemplate>
        {data && (
          <Container>
            <Typography
              variant="h1"
              textAlign="center"
              mb={{ xs: 3, md: 5, lg: 6 }}
              maxWidth={{ xs: '80%' }}
              mx="auto"
            >
              {t(`navigation.${Routes.UKRAINIAN_WORKS}`)}
            </Typography>

            <PortableComponent data={data.text} />
          </Container>
        )}
      </PageTemplate>
    </>
  );
};

export default UkrainianComposition;
