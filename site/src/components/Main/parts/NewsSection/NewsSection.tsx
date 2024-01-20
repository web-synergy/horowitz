import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import ShowMoreBtn from './ShowMoreBtn'

import pianistImg from '../../temp/pianist.jpg'

import fakeData from './fakeData.json'
import NewsCard from './NewsCard'

import { sliceNewsTitle } from '@/utils/helpers'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

const NewsSection: FC = () => {
  const { breakpoints } = useTheme()
  const isTablet = useMediaQuery(breakpoints.only('md'))
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const slidesPerView = isTablet ? 2.1 : isMobile ? 1.2 : 3

  return (
    <Box
      component={'section'}
      sx={{
        padding: {
          xs: '72px 0',
          md: '96px 0',
          lg: '120px 0',
        },
      }}
    >
      <Box>
        <Container>
          <Stack
            sx={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '48px' }}
          >
            <Typography variant="h1">Новини</Typography>
            <Box>
              <ShowMoreBtn title="Переглянути всі" link="/" />
            </Box>
          </Stack>
        </Container>
        <Container sx={{ '&.MuiContainer-root': { paddingRight: 0 } }}>
          <Swiper spaceBetween={'24px'} slidesPerView={slidesPerView}>
            {fakeData.map(({ id, link, title }) => (
              <SwiperSlide key={id}>
                <NewsCard title={sliceNewsTitle(title, 48)} image={pianistImg} link={link} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </Box>
  )
}

export default NewsSection
