import { Box } from '@mui/material'

import { FC } from 'react'
import HeroSection from './parts/HeroSection'

const MainPage: FC = () => {
  return (
    <>
      <HeroSection />
      <Box sx={{ height: '644px' }}></Box>
    </>
  )
}

export default MainPage
