import { useEffect } from 'react';
import PageTemplate from '../Common/PageTemplate';
import { Button, Container, List, Typography, Box } from '@mui/material';

import { useNewsStore } from '@/store/newsStore';

import NewsListItem from './pars/NewsListItem';
import { INews } from '@/types/newsTypes';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '../Common/Breadcrumbs';
import { Routes } from '@/types/routes.d';

const NewsPageList = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { newsList, fetchNews } = useNewsStore();

  useEffect(() => {
    if (!newsList.length) fetchNews(language, 0, 10);
  }, [language]);

  return (
    <PageTemplate>
      <Container>
        <Breadcrumbs title={t(`navigation.${Routes.NEWS}`)} mode='light' />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 5, md: 6, lg: 7 },
            mt: { xs: 5, md: 6, lg: 7 },
            mb: { xs: '56px', md: '90px', lg: '120px' },
          }}>
          <Typography variant='h2'>Новини</Typography>
          <List
            sx={{
              display: 'grid',
              flexDirection: 'column',
              gap: { xs: 5, md: 6, lg: 7 },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}>
            {newsList &&
              newsList.map((news: INews) => (
                <NewsListItem
                  key={news._id}
                  title={news.title}
                  date={news._createdAt}
                  img={news.img}
                  slug={news.slug}
                  shortDescription={news.shortDescription}
                />
              ))}
          </List>
          <Box sx={{ margin: '0 auto' }}>
            <Button variant='secondary'>Показати Більше</Button>
          </Box>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default NewsPageList;
