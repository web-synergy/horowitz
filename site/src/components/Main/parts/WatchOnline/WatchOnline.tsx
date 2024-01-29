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
  const { t } = useTranslation()

  return (
    <Wrapper component={'section'}>
      <StyledContainer>

        <MainTitle component={'h2'}>{t(`mainPage.${MainPage.WATCH_ONLINE_XS}`)}</MainTitle>
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
