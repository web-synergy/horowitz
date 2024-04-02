import { FC, PropsWithChildren } from 'react'

import { Box, Container } from '@mui/material'

import BACKGROUND from '@/assets/images/kyiv-geneva/mainPage/geneva_bg_piano.webp'
import { BgImage, MainBox } from './styled'

type NavListWrapperProps = {
  flexHeightLimits: {
    lg: string
    md: string
  }
}

const NavListWrapper: FC<PropsWithChildren & NavListWrapperProps> = ({
  children,
  flexHeightLimits,
}) => {
  return (
    <MainBox>
      <BgImage component={'img'} src={BACKGROUND} alt="background image" />
      <Box position={'relative'} zIndex={5}>
        <Container>
          <Box
            sx={{
              height: {
                md: flexHeightLimits.md,
                lg: flexHeightLimits.lg,
              },
            }}
          >
            {children}
          </Box>
        </Container>
      </Box>
    </MainBox>
  )
}

export default NavListWrapper
