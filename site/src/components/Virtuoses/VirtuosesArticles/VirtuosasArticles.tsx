/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { Container, List, Typography, Stack } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { INews } from '@/types/newsTypes';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';

import { useSearchParams } from 'react-router-dom';
import Loader from '@/components/Common/Loader';
import PageTemplate from '@/components/Common/PageTemplate';
import NewsListItem from '@/components/NewsPageList/parts/NewsListItem';
import PaginationNews from '@/components/NewsPageList/parts/PaginationNews';
import { useVirtuososStore } from '@/store/virtuososStor';

import { Virtuosos } from '@/types/translation.d';

const VirtuosasArticles = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const {
    articleList,
    fetchVirtuososArticles,
    pageQty,
    loading,
    requestLang,
    currentPage,
  } = useVirtuososStore();
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
    if (currentPage !== urlPage || requestLang !== language) {
      fetchVirtuososArticles(language, urlPage);
    }
  }, [language, urlPage]);

  if (loading) return <Loader />;
  return (
    <PageTemplate goBackUrl={Routes.VIRTUOSES}>
      <Container>
        <Stack>
          <Typography
            sx={{
              pb: { xs: 3, md: 5, lg: 6 },
            }}
            variant="h2"
          >
            {t(`virtuosos.${Virtuosos.NEWS}`)}
          </Typography>
          <List
            sx={{
              display: 'grid',
              flexDirection: 'column',
              gap: { xs: 5, md: 6, lg: 7 },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            {articleList &&
              articleList.map((news: INews, index) => (
                <NewsListItem
                  key={index}
                  title={news.title}
                  date={news.date}
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
  );
};

export default VirtuosasArticles;
