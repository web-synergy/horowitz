import { Box, Stack } from '@mui/material'
import { FC } from 'react'
import { MainTitle } from '../../styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { MainPage } from '@/types/translation.d'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { ShowMoreBtn } from './styled'
import { sponsorsLogotypes } from './test'

const PartnersAndFriends: FC = () => {
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
          centeredSlides={true}
          breakpoints={{
            1280: {
              spaceBetween: 150,
              slidesPerView: 2.2,
            },
            320: {
              spaceBetween: 40,
              slidesPerView: 1.7,
            },
          }}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 600,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {sponsorsLogotypes.map((logo, i) => (
            <SwiperSlide key={i}>
              <img
                src={logo}
                alt="logotype"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        <ShowMoreBtn variant="secondary" component={RouterLink} to={'/sponsors'}>
          {t(`mainPage.${MainPage.BTN_SHOW}`)}
        </ShowMoreBtn>
      </Box>
    </Stack>
  )
}

export default PartnersAndFriends
