import { useTranslation } from 'react-i18next';

import 'swiper/swiper-bundle.css';

import { Routes } from '@/types/routes.d';

import { FC } from 'react';

import { Container } from '@mui/material';

import { NewsBox } from './styled';

import { useHomeStore } from '@/store/homeStore';

import NewsSwiper from '@/components/NewsSection/NewsSwiper';

const NewsSection: FC = () => {
  const news = useHomeStore((state) => state.news);
  const { t } = useTranslation();

  return (
    <NewsBox component={'section'}>
      <>
        <Container>
          {news && (
            <NewsSwiper
              title={t(`navigation.${Routes.NEWS}`)}
              link={Routes.NEWS}
              news={news}
            />
          )}
        </Container>
      </>
    </NewsBox>
  );
};

export default NewsSection;
