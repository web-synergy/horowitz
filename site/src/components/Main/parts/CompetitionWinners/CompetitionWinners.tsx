import { Container, Stack, useMediaQuery, useTheme } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { MainPage } from '@/types/translation.d'
import ShowMoreBtn from '../NewsSection/ShowMoreBtn'
import WinnerCard from './WinnerCard'
import { MainTitle, WinnersCardsStack, Wrapper } from './styled'

// !TEMP
import fakeData from '../../temp/fakeDataWinners.json'
import { default as winner1Img, default as winner4Img } from '../../temp/winner_1.jpg'
import { default as winner2Img, default as winner5Img } from '../../temp/winner_2.jpg'
import { default as winner3Img, default as winner6Img } from '../../temp/winner_3.jpg'

const CompetitionWinners: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))
  const { t } = useTranslation()

  // !TEMP
  const images = [winner1Img, winner2Img, winner3Img, winner4Img, winner5Img, winner6Img]

  if (isVisible) console.log('VISIBLE')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true)
          else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <Wrapper component={'section'} ref={ref}>
      <Container>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', gap: '50px' }}>
          <MainTitle variant="h1">Переможці XIII Конкурсу</MainTitle>
          <ShowMoreBtn
            title={t(`mainPage.${MainPage.BTN_VIEW}`)}
            link={'/'}
            isTitleVisible={!isMobile}
          />
        </Stack>
        <WinnersCardsStack>
          {/* ! TEMP */}
          {fakeData.map(({ id, ...props }, i) => {
            return (
              <WinnerCard key={id} {...{ ...props, image: images[i], isVisible, delay: i + 2 }} />
            )
          })}
        </WinnersCardsStack>
      </Container>
    </Wrapper>
  )
}

export default CompetitionWinners
