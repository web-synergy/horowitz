import { Container, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'

import DesktopView from './parts/DesktopView'
import MobileView from './parts/MobileView'
import { Section } from './styled'

const Footer: FC = () => {
  const { breakpoints } = useTheme()
  const isTablet = useMediaQuery(breakpoints.down('lg'))
  const view = isTablet ? <MobileView /> : <DesktopView />

  return (
    <Section component={'footer'}>
      <Container>{view}</Container>
    </Section>
  )
}

export default Footer
