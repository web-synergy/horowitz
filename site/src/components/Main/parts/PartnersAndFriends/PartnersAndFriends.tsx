import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import { MainTitle } from '../../styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import './currSwiperStyles.css'

import { MainPage } from '@/types/translation.d'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { ShowMoreBtn } from './styled'
import { sponsorsLogotypes } from './test'

const PartnersAndFriends: FC = () => {
  const { breakpoints } = useTheme()
  const isTablet = useMediaQuery(breakpoints.down('lg'))
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const { t } = useTranslation()
  return (
    <Stack
      spacing={6}
      sx={{
        marginBottom: {
          xs: '72px',
          md: '96px',
          lg: '120px',
        },
      }}
    >
      <MainTitle component={'h2'} sx={{ textAlign: 'center' }}>
        {t(`mainPage.${MainPage.FRIENDS}`)}
      </MainTitle>
      <Box sx={{ height: '150px' }}>
        <Swiper
          slidesPerView={isMobile ? 1.7 : 2.1}
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
      <Box sx={{ textAlign: 'center' }}>
        <ShowMoreBtn variant="secondary" component={RouterLink} to={'/sponsors'}>
          {t(`mainPage.${MainPage.BTN_SHOW}`)}
        </ShowMoreBtn>
      </Box>
    </Stack>
  )
}

export default PartnersAndFriends
