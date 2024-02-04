import SocialMedia from '@/components/Common/SocialMedia'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { FC, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import bgVideo from '../../../../assets/bg_video.mp4'

import EUMCY_logo from '../../temp/EUMCY_logo.svg'
import WFIMC_logo from '../../temp/WFIMC_logo.svg'

import { MainPage } from '@/types/translation.d'
import { useTranslation } from 'react-i18next'
import LogoImg from './LogoImg'
import ScrollDownBtn from './ScrollDownBtn'
import {
  ButtonsStack,
  ContentStack,
  LogotypesStack,
  MainTitle,
  Overlay,
  SocialMediaBox,
  StyledButton,
  StyledContainer,
  Video,
} from './styled'

const HeroSection: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  if (videoRef.current) videoRef.current.playbackRate = 0.5

  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('lg'))

  const { t } = useTranslation()

  return (
    <Box
      component={'section'}
      position={'relative'}
      sx={{
        width: '100%',
        height: '100svh',
      }}
    >
      <Video src={bgVideo} autoPlay loop muted ref={videoRef} />
      <Overlay>
        <StyledContainer>
          <Box position={'relative'} sx={{ width: '100%' }}>
            <SocialMediaBox>
              <SocialMedia vertical={!isMobile} />
            </SocialMediaBox>
            <ContentStack>
              <MainTitle component={'h1'}>{t('institutional_name')}</MainTitle>
              <ButtonsStack>
                <StyledButton component={RouterLink} to={'in-development'}>
                  {t(`mainPage.${MainPage.BTN_APL}`)}
                </StyledButton>
                <StyledButton variant="secondary" component={RouterLink} to={'in-development'}>
                  {t(`mainPage.${MainPage.BTN_SUPP}`)}
                </StyledButton>
              </ButtonsStack>
              <LogotypesStack>
                <RouterLink to="https://www.wfimc.org/" target="_blank">
                  <LogoImg src={WFIMC_logo} alt="WFIMC logotype" />
                </RouterLink>
                <RouterLink to="https://emcy.org/" target="_blank">
                  <LogoImg src={EUMCY_logo} alt="EMCY logotype" />
                </RouterLink>
              </LogotypesStack>
            </ContentStack>
          </Box>
          <ScrollDownBtn onClick={() => scrollTo({ top: innerHeight, behavior: 'smooth' })} />
        </StyledContainer>
      </Overlay>
    </Box>
  )
}

export default HeroSection
