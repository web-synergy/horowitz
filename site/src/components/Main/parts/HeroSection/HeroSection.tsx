import { Offset } from '@/components/Common/Offset'
import SocialMedia from '@/components/Common/SocialMedia'
import { Box, Button, Container, Stack, styled, useMediaQuery, useTheme } from '@mui/material'
import { FC, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import bgVideo from '../../../../../public/bg_video.mp4'
import pianoImage from '../../temp/piano_image.png'

import EMCY_logo from '../../temp/EMCY_logo.svg'
import WFIMC_logo from '../../temp/WFIMC_logo.svg'

import ScrollDownBtn from './ScrollDownBtn'
import {
  ButtonsStack,
  ContentStack,
  ContentWrapper,
  Overlay,
  SocialMediaBox,
  Video,
} from './styled'

const HeroSection: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  if (videoRef.current) videoRef.current.playbackRate = 0.5

  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('lg'))

  const windowHeight = innerHeight

  console.log(windowHeight)

  return (
    <Box
      component={'section'}
      position={'relative'}
      sx={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Video src={bgVideo} autoPlay loop muted ref={videoRef} />
      <Overlay>
        <Offset />
        <Container>
          <ContentWrapper>
            <ContentStack>
              <SocialMediaBox>
                <SocialMedia vertical={!isMobile} />
              </SocialMediaBox>
              <Box
                component={'img'}
                src={pianoImage}
                sx={{ maxWidth: '695px' }}
                alt="piano image"
              />
              <ButtonsStack>
                <Button
                  component={RouterLink}
                  to={'in-development'}
                  sx={{
                    width: {
                      xs: '288px',
                      md: '266px',
                    },
                  }}
                >
                  Заявка на участь
                </Button>
                <Button
                  variant="secondary"
                  component={RouterLink}
                  to={'in-development'}
                  sx={{
                    width: {
                      xs: '288px',
                      md: '266px',
                    },
                  }}
                >
                  Підтримати проєкт
                </Button>
              </ButtonsStack>
            </ContentStack>
            <ScrollDownBtn onClick={() => scrollTo({ top: windowHeight, behavior: 'smooth' })} />
            <Stack
              sx={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: {
                  xs: '24px',
                  md: '40px',
                  lg: '56px',
                },
                gap: {
                  xs: '24px',
                  md: '48px',
                },
              }}
            >
              <Box
                component={'img'}
                src={WFIMC_logo}
                alt="WFIMC logotype"
                width={'250px'}
                height={'48px'}
              />

              <Box
                component={'img'}
                src={EMCY_logo}
                alt="EMCY logotype"
                width={'250px'}
                height={'48px'}
              />
            </Stack>
          </ContentWrapper>
        </Container>
      </Overlay>
    </Box>
  )
}

export default HeroSection
