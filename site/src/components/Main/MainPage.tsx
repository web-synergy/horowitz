import { AspectRatio, Box, Container } from '@mui/material'

import bgVideo from '../../../public/bg_video.mp4'

const MainPage = () => {
  return (
    <Box
      position={'relative'}
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(8, 7, 8, 0.40)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <Box
        component={'video'}
        src={bgVideo}
        autoPlay
        loop
        muted
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 10,
          bgcolor: 'rgba(0, 0, 0, 0.70);',
        }}
      ></Box>
    </Box>
  )
}

export default MainPage
