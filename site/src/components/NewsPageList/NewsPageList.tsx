/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import PageTemplate from '../Common/PageTemplate';
import { Button, Container, List, Typography, Box, Stack } from '@mui/material';

import { useNewsStore } from '@/store/newsStore';

import NewsListItem from './pars/NewsListItem';
import { INews } from '@/types/newsTypes';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '../Common/Breadcrumbs';
import { Routes } from '@/types/routes.d';
import Loader from '../Common/Loader';
import { useSearchParams } from 'react-router-dom';

const NewsPageList = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { fetchNews, newsList, loading, isLastEl } = useNewsStore(state => ({
    fetchNews: state.fetchNews,
    loading: state.loading,
    newsList: state.newsList[language],
    isLastEl: state.isLastEl,
  }));
  const [searchParams, setSearchParams] = useSearchParams();

  const urlPage = +(searchParams.get('page') || 1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    fetchNews(language, urlPage);
  }, [language, urlPage]);

  const handler = () => {
    const countedPage = urlPage + 1;

    setSearchParams(prev => {
      prev.set('page', countedPage.toString());
      return prev;
    });
  };

  if (loading) return <Loader />;
  return (
    <PageTemplate>
      <Container>
        <Breadcrumbs title={t(`navigation.${Routes.NEWS}`)} mode='light' />
        <Stack>
          <Typography
            sx={{
              my: { xs: '48px', lg: '56px' },
            }}
            variant='h2'>
            {t(`navigation.${Routes.NEWS}`)}
          </Typography>
          <List
            sx={{
              display: 'grid',
              flexDirection: 'column',
              gap: { xs: 5, md: 6, lg: 7 },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}>
            {newsList &&
              newsList.map((news: INews, index) => (
                <NewsListItem
                  key={index}
                  title={news.title}
                  date={news._createdAt}
                  img={news.img}
                  slug={news.slug}
                  shortDescription={news.shortDescription}
                />
              ))}
          </List>
          <Box
            sx={{
              my: { xs: '48px', lg: '56px' },
              mx: 'auto',
            }}>
            {!isLastEl && (
              <Button onClick={handler} variant='transparent'>
                {t(`news.showMore`)}
              </Button>
            )}
          </Box>
        </Stack>
      </Container>
    </PageTemplate>
  );
};

export default NewsPageList;
