import { useTranslation } from 'react-i18next';

import 'swiper/swiper-bundle.css';

import { Routes } from '@/types/routes.d';

import { FC } from 'react';

import { Box, Button, Container } from '@mui/material';

import { NewsBox } from './styled';

import { useHomeStore } from '@/store/homeStore';

import NewsSwiper from '@/components/NewsSection/NewsSwiper';
import { Link } from 'react-router-dom';

const NewsSection: FC = () => {
  const news = useHomeStore(state => state.news);
  const { t } = useTranslation();

  return (
    <NewsBox component={'section'}>
      <>
        <Container>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button component={Link} to={'pdf/Котики'}>
              Котики
            </Button>
            <Button component={Link} to={'pdf/Менеджмент'}>
              Менеджмент
            </Button>
            <Button component={Link} to={'pdf/BMW'}>
              BMW
            </Button>
            <Button component={Link} to={'pdf/Prada'}>
              Prada
            </Button>
            <Button component={Link} to={'pdf/Буклет'}>
              Буклет
            </Button>
          </Box>

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
