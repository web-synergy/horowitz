import { useTranslation } from 'react-i18next';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './sliderSettings.css';

import { sliceNewsTitle } from '@/utils/helpers';

import NewsCart from './NewsCart';
import LinkBtn from '../Common/LinkBtn';

import { Buttons } from '@/types/translation.d';
import { IImage } from '@/types/commonTypes';

interface INews {
  title: string;
  slug: string;
  img: IImage;
  banner: IImage | undefined | null;
}
const NewsSwiper = ({
  news,
  title,
  link,
}: {
  news: INews[];
  title: string;
  link: string;
}) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));

  const { t } = useTranslation();

  return (
    <Box>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={{ xs: 3, md: 5, lg: 6 }}
      >
        <Typography component={'h2'} variant="h1">
          {title}
        </Typography>
        <Box>
          <LinkBtn
            title={t(`buttons.${Buttons.SHOW_ALL}`)}
            link={`/${link}`}
            isTitleVisible={!isMobile}
          />
        </Box>
      </Stack>

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
        }}
      >
        {news.map((item) => {
          const { slug, img, banner, title } = item;
          return (
            <SwiperSlide key={slug} style={{ height: 'auto' }}>
              <NewsCart
                title={sliceNewsTitle(title, 49)}
                img={banner || img}
                slug={`/${link}/${slug}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default NewsSwiper;
