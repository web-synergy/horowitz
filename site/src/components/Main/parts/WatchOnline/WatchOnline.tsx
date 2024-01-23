import { useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import PlayerCard from './PlayerCard'
import { MainTitle, StyledContainer, Wrapper } from './styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

// !temp
import urlList from '../../temp/watchOnlineList.json'

const WatchOnline: FC = () => {
  const { breakpoints } = useTheme()
  const isTablet = useMediaQuery(breakpoints.only('md'))
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const slidesPerView = isTablet ? 2.1 : isMobile ? 1.2 : 3
  return (
    <Wrapper component={'section'}>
      <StyledContainer>
        <MainTitle component={'h2'}>Дивитись онлайн</MainTitle>
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
