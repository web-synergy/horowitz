import { useEffect } from 'react';
import PageTemplate from '../Common/PageTemplate';
import { Button, Container, List, Typography, Box, Stack } from '@mui/material';

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
    fetchNews(language, 0, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

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
            Новини
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
            <Button variant='transparent'>Показати Більше</Button>
          </Box>
        </Stack>
      </Container>
    </PageTemplate>
  );
};

export default NewsPageList;
