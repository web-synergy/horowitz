import { Container, Stack, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { MainPage } from '@/types/translation.d'
import ShowMoreBtn from '../NewsSection/ShowMoreBtn'
import WinnerCard from './WinnerCard'
import { MainTitle, Wrapper } from './styled'

import fakeData from '../../temp/fakeDataWinners.json'
import winner1Img from '../../temp/winner_1.jpg'

const CompetitionWinners: FC = () => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))
  const { t } = useTranslation()

  return (
    <Wrapper component={'section'}>
      <Container>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', gap: '50px' }}>
          <MainTitle variant="h1">Переможці XIII Конкурсу</MainTitle>
          <ShowMoreBtn
            title={t(`mainPage.${MainPage.BTN_VIEW}`)}
            link={'/'}
            isTitleVisible={!isMobile}
          />
        </Stack>
        <Stack
          sx={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: {
              xs: '32px',
              md: '24px',
            },
            justifyContent: 'center',
            marginTop: {
              xs: '32px',
              md: '24px',
              lg: '48px',
            },
          }}
        >
          {/* ! TEMP */}
          {fakeData.map(({ id, ...props }) => (
            <WinnerCard key={id} {...{ ...props, image: winner1Img }} />
          ))}
        </Stack>
      </Container>
    </Wrapper>
  )
}

export default CompetitionWinners