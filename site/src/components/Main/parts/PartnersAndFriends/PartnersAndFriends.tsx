import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import { MainTitle } from '../../styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import './currSwiperStyles.css'

import { Autoplay } from 'swiper/modules'
import { sponsorsLogotypes } from './test'

const PartnersAndFriends: FC = () => {
  const { breakpoints } = useTheme()
  const isTablet = useMediaQuery(breakpoints.down('lg'))
  const isMobile = useMediaQuery(breakpoints.down('md'))
  return (
    <Stack spacing={6} sx={{ marginBottom: '100px' }}>
      <MainTitle component={'h2'} sx={{ textAlign: 'center' }}>
        Партнери та друзі
      </MainTitle>
      <Box sx={{ height: '150px' }}>
        <Swiper
          slidesPerView={isMobile ? 1.7 : 2.2}
          centeredSlides={true}
          spaceBetween={isTablet ? 40 : 150}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 600,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {sponsorsLogotypes.map((logo, i) => (
            <SwiperSlide id="sponsors-swiper-slide" key={i}>
              <img src={logo} alt="logotype" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  )
}

export default PartnersAndFriends
