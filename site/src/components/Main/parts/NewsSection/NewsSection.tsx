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

import pianistImg from '../../temp/pianist.jpg'
import fakeData from './fakeData.json'

const NewsSection: FC = () => {
  const { breakpoints } = useTheme()
  const isTablet = useMediaQuery(breakpoints.only('md'))
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const slidesPerView = isTablet ? 2.1 : isMobile ? 1.2 : 3

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
          <Swiper spaceBetween={24} slidesPerView={slidesPerView}>
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
