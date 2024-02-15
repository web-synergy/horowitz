/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { Container, List, Typography, Box, Stack } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { INews } from '@/types/newsTypes';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';

import { useSearchParams } from 'react-router-dom';
import Loader from '@/components/Common/Loader';
import PageTemplate from '@/components/Common/PageTemplate';
import NewsListItem from '@/components/NewsPageList/pars/NewsListItem';
import PaginationNews from '@/components/NewsPageList/pars/PaginationNews';
import { useVirtuososStore } from '@/store/virtuososStor';

const VirtuosasArticles = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { articleList, fetchVirtuososArticles, pageQty, loading } =
    useVirtuososStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const urlPage = +(searchParams.get('page') || 1);

  useEffect(() => {
    if (isNaN(urlPage)) {
      return navigate('/404');
    }

    if (urlPage <= 0) {
      return navigate('/404');
    }
    fetchVirtuososArticles(language, urlPage);
  }, [language, urlPage]);

  if (loading) return <Loader />;
  return (
    <PageTemplate>
      <Container>
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
            {articleList &&
              articleList.map((news: INews, index) => (
                <NewsListItem
                  key={index}
                  title={news.title}
                  dateStart={news.dateStart}
                  dateEnd={news.dateEnd}
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
            <PaginationNews
              pageQty={pageQty}
              setSearchParams={setSearchParams}
              urlPage={urlPage}
            />
          </Box>
        </Stack>
      </Container>
    </PageTemplate>
  );
};

export default VirtuosasArticles;
