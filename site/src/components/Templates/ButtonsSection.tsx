// import { Routes } from '@/types/routes.d';

import { Box, Container, SxProps } from '@mui/material'
import { FC } from 'react'

import LinksList, { ListItem } from '@/components/Templates/NavList/NavList'
import { BgImage, MainBox } from '../KyivGeneva/parts/styled'

type ButtonsSectionProps = {
  bgImage: string
  linksList: ListItem[]
  sx: SxProps
}

const ButtonsSection: FC<ButtonsSectionProps> = ({ bgImage, linksList, ...sx }) => {
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
