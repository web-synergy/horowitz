import { FC } from 'react'

import { Box, Stack } from '@mui/material'
import { MainTitle } from '../../styled'
import { ShowMoreBtn } from './styled'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { urlFor } from '@/config/sanity/imageUrl'
import { usePartnersStore } from '@/store'
import { Routes } from '@/types/routes.d'
import { MainPage } from '@/types/translation.d'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'

const PartnersAndFriends: FC = () => {
  const { t } = useTranslation()
  const partners = usePartnersStore(state => state.filtered)

  if (!partners) return null

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
            320: {
              spaceBetween: 40,
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1.9,
            },
            1280: {
              spaceBetween: 150,
              slidesPerView: 2.2,
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
          {partners.length &&
            partners.map(({ _key, img, title }) => (
              <SwiperSlide key={_key}>
                <img
                  src={img?.asset && urlFor(img).url().toString()}
                  alt={title}
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
        <ShowMoreBtn variant="secondary" component={RouterLink} to={Routes.SPONSORS}>
          {t(`mainPage.${MainPage.BTN_SHOW}`)}
        </ShowMoreBtn>
      </Box>
    </Stack>
  )
}

export default PartnersAndFriends
