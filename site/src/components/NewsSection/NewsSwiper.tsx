import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import './sliderSettings.css'

import { sliceNewsTitle } from '@/utils/helpers'

import { Buttons } from '@/types/translation.d'

import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

import { IImage } from '@/types/newsTypes'
import NewsCart from './NewsCart'
import { ShowMoreBtn } from './ShowMoreBtn'

interface INews {
  title: string
  slug: string
  img: IImage
}
const NewsSwiper = ({ news, title, link }: { news: INews[]; title: string; link: string }) => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const { t } = useTranslation()

  return (
    <Box>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: { xs: '32px', md: '48px' },
        }}
      >
        <Typography component={'h2'} variant="h1">
          {title}
        </Typography>
        <Box>
          <ShowMoreBtn
            title={t(`buttons.${Buttons.VIEW_ALL}`)}
            link={`/${link}`}
            isTitleVisible={!isMobile}
          />
        </Box>
      </Stack>

      <Swiper
        spaceBetween={24}
        breakpoints={{
          300: {
            slidesPerView: 1.7,
          },
          768: {
            slidesPerView: 2.1,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {news.map(({ slug, img, title }) => (
          <SwiperSlide key={slug} style={{ height: 'auto' }}>
            <NewsCart title={sliceNewsTitle(title, 49)} img={img} slug={`/${link}/${slug}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default NewsSwiper
