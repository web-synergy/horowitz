import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { sliceNewsTitle } from '@/utils/helpers'

import { Routes } from '@/types/routes.d'
import { MainPage } from '@/types/translation.d'

import { FC } from 'react'

import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import NewsCard from './NewsCard'
import ShowMoreBtn from './ShowMoreBtn'
import { NewsBox, StyledContainer } from './styled'

import fakeData from '../../temp/fakeData.json'
import pianistImg from '../../temp/pianist.jpg'

const NewsSection: FC = () => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const { t } = useTranslation()

  return (
    <NewsBox component={'section'}>
      <>
        <Container>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '48px',
            }}
          >
            <Typography component={'h2'} variant="h1">
              {t(`mainPage.${MainPage.NEWS}`)}
            </Typography>
            <Box>
              <ShowMoreBtn
                title={t(`mainPage.${MainPage.BTN_VIEW}`)}
                link={`/${[Routes.NEWS]}`}
                isTitleVisible={!isMobile}
              />
            </Box>
          </Stack>
        </Container>
        <StyledContainer>
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
            {fakeData.map(({ id, link, title }) => (
              <SwiperSlide key={id}>
                <NewsCard title={sliceNewsTitle(title, 48)} image={pianistImg} link={link} />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledContainer>
      </>
    </NewsBox>
  )
}

export default NewsSection
