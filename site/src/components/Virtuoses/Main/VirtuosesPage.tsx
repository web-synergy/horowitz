import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';

import { useLiveQuery } from '@sanity/preview-kit';
import { virtuososQuery } from '@/api/query';

import { useVirtuososStore } from '@/store/virtuososStor';

import PageTemplate from '../../Common/PageTemplate';
import MainBanner from '@/components/Templates/MainBanner/MainBanner';
import Loader from '@/components/Common/Loader';
import NewsSwiper from '../../NewsSection/NewsSwiper';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import { ImagesArray } from '../../Templates/PortableComponent/parts/ImageComponent';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';
import { Routes } from '@/types/routes.d';
import { Virtuosos } from '@/types/translation.d';
import SeoComponent from '@/components/Common/SEO';

const VirtuosesPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { virtuosos, fetchVirtuosos, requestLang, loading } = useVirtuososStore(
    (state) => ({
      virtuosos: state.virtuosos,
      fetchVirtuosos: state.fetchVirtuosos,
      requestLang: state.requestLang,
      loading: state.loading,
    })
  );

  useEffect(() => {
    if (requestLang === language) return;
    fetchVirtuosos(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const [data] = useLiveQuery(virtuosos, virtuososQuery, {
    language,
  });

  const title = t(`navigation.${Routes.VIRTUOSES}`);

  if (loading) return <Loader />;
  if (!data) {
    return;
  }

  return (
    <>
      <SeoComponent canonicalUrl={Routes.VIRTUOSES} title={title} />
      <MainBanner banner={data.banner} />
      <PageTemplate>
        <Container
          sx={{
            '*:last-child': {
              marginBottom: '0px',
            },
          }}
        >
          <CommonStackWrapper>
            <Typography variant="h1" textAlign={'center'}>
              {title}
            </Typography>
            <TextBlockComponent text={data.description} />
            {data.article.length > 0 && (
              <NewsSwiper
                title={t(`virtuosos.${Virtuosos.NEWS}`)}
                link={Routes.VIRTUOSES_ARTICLE}
                news={data.article}
              />
            )}
            <ImagesArray value={data.gallery} />
          </CommonStackWrapper>
        </Container>
      </PageTemplate>
    </>
  );
};

export default VirtuosesPage;
