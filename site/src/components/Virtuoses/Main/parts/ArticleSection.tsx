import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { sliceNewsTitle } from '@/utils/helpers';

import { Routes } from '@/types/routes.d';
import { MainPage, Buttons } from '@/types/translation.d';

import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ShowMoreBtn from '@/components/Main/parts/NewsSection/ShowMoreBtn';
import { IImage } from '@/types/newsTypes';
import ArticleCard from './ArticleCard';
interface IArticle {
  title: string;
  slug: string;
  img: IImage;
}
const ArticleSection = ({ article }: { article: IArticle[] }) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));

  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '48px',
          }}>
          <Typography component={'h2'} variant='h1'>
            {t(`mainPage.${MainPage.NEWS}`)}
          </Typography>
          <Box>
            <ShowMoreBtn
              title={t(`buttons.${Buttons.VIEW_ALL}`)}
              link={`/${[Routes.VIRTUOSES_ARTICLE]}`}
              isTitleVisible={!isMobile}
            />
          </Box>
        </Stack>
      </Container>

      <Swiper
        spaceBetween={24}
        breakpoints={{
          300: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.1,
          },
          1280: {
            slidesPerView: 3,
          },
        }}>
        {article.map(({ slug, img, title }) => (
          <SwiperSlide key={slug}>
            <ArticleCard
              title={sliceNewsTitle(title, 48)}
              img={img}
              slug={slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ArticleSection;
