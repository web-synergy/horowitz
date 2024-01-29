import { useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import PlayerCard from './PlayerCard'
import { StyledContainer, Wrapper } from './styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { MainPage } from '@/types/translation.d'

// !temp
import { useTranslation } from 'react-i18next'
import { MainTitle } from '../../styled'
import urlList from '../../temp/watchOnlineList.json'

const WatchOnline: FC = () => {
  const { breakpoints } = useTheme()
  const isTablet = useMediaQuery(breakpoints.only('md'))
  const isMobile = useMediaQuery(breakpoints.down('md'))
  const slidesPerView = isTablet ? 2.1 : isMobile ? 1.2 : 3

  const { t } = useTranslation()

  return (
    <Wrapper component={'section'}>
      <StyledContainer>
        <MainTitle
          component={'h2'}
          sx={{
            marginBottom: {
              xs: '24px',
              md: '40px',
              lg: '48px',
            },
          }}
        >
          {t(`mainPage.${MainPage.WATCH_ONLINE_XS}`)}
        </MainTitle>
        <Swiper spaceBetween={24} slidesPerView={slidesPerView}>
          {urlList.map(({ id, ...props }) => (
            <SwiperSlide key={id}>
              <PlayerCard {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledContainer>
    </Wrapper>
  )
}

export default WatchOnline
