/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import PageTemplate from '../Common/PageTemplate';
import { Container, List, Typography, Stack } from '@mui/material';

import { useNewsStore } from '@/store/newsStore';
import { useNavigate } from 'react-router-dom';
import NewsListItem from './parts/NewsListItem';
import { INews } from '@/types/newsTypes';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';

import { useSearchParams } from 'react-router-dom';
import Loader from '../Common/Loader';
import PaginationNews from './parts/PaginationNews';
import SeoComponent from '../Common/SEO';

const NewsPageList = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { fetchNews, newsList, pageQty, loading, currentPage, requestLang } =
    useNewsStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const urlPage = +(searchParams.get('page') || 1);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isNaN(urlPage)) {
      return navigate('/404');
    }
    if (urlPage <= 0) {
      return navigate('/404');
    }
    if (currentPage !== urlPage || requestLang !== language) {
      fetchNews(language, urlPage);
    }
  }, [language, urlPage]);

  if (loading) return <Loader />;

  const title = t(`navigation.${Routes.NEWS}`);
  return (
    <>
      <SeoComponent canonicalUrl={Routes.NEWS} title={title} />
      <PageTemplate>
        <Container>
          <Stack>
            <Typography
              sx={{
                mb: { xs: '24px', md: '48px' },
              }}
              variant="h2"
            >
              {title}
            </Typography>
            <List
              sx={{
                display: 'grid',
                flexDirection: 'column',
                gap: 7,
                justifyContent: { xs: 'center', md: 'flex-start' },
                mb: { xs: 3, md: 6 },
              }}
            >
              {newsList &&
                newsList.map((news: INews, index) => (
                  <NewsListItem
                    key={index}
                    date={news.date}
                    title={news.title}
                    img={news.img}
                    slug={news.slug}
                    shortDescription={news.shortDescription}
                  />
                ))}
            </List>

            <PaginationNews
              pageQty={pageQty}
              setSearchParams={setSearchParams}
              urlPage={urlPage}
            />
          </Stack>
        </Container>
      </PageTemplate>
    </>
  );
};

export default NewsPageList;
