// import { Routes } from '@/types/routes.d';

import { Box, Container, SxProps } from '@mui/material'
import { FC } from 'react'

import LinksList, { ListItem } from '@/components/Templates/NavList/NavList'
import { BgImage, MainBox } from '../KyivGeneva/parts/styled'

import bgImage from '@/assets/images/kyiv-geneva/mainPage/geneva_bg_piano.webp'

type ButtonsSectionProps = {
  // bgImage: string
  linksList: ListItem[]
  sx: SxProps
}

const ButtonsSection: FC<ButtonsSectionProps> = ({ linksList, ...sx }) => {
  return (
    <MainBox>
      <BgImage component={'img'} src={bgImage} alt="background image" />
      <Box position={'relative'} zIndex={5}>
        <Container>
          <Box {...sx}>
            <LinksList
              linksList={linksList}
              // path={Routes.KYIV_GENEVA}
            />
          </Box>
        </Container>
      </Box>
    </MainBox>
  )
}

export default ButtonsSection
