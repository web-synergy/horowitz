import { Offset } from '@/components/Common/Offset'
import SocialMedia from '@/components/Common/SocialMedia'
import { Box, Container, Stack, styled, useMediaQuery, useTheme } from '@mui/material'
import { FC, useRef } from 'react'

import bgVideo from '../../../../public/bg_video.mp4'
import pianoImage from '../temp/piano_image.png'

const Video = styled('video')(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

const HeroSection: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  if (videoRef.current) videoRef.current.playbackRate = 0.5

  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('lg'))

  return (
    <Box
      position={'relative'}
      sx={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Video src={bgVideo} autoPlay loop muted ref={videoRef} />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          bgcolor: 'rgba(0, 0, 0, 0.70);',
        }}
      >
        <Offset />
        <Container>
          <Box
            sx={{
              padding: {
                xs: '60px 0',
                md: '80px 0',
                lg: '96px 0 128px',
              },
              color: theme => theme.palette.common.white,
            }}
          >
            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Box
                component={'img'}
                src={pianoImage}
                sx={{ width: '695px', height: '220px' }}
                alt="piano image"
              />
              <Box>
                <SocialMedia vertical={!isMobile} />
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default HeroSection
