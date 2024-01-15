import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import SocialMedia from '@/components/Common/SocialMedia'
import { useSettingsStore } from '@/store'

interface AboutUsProps {
  about: string
}

const AboutUs: FC<AboutUsProps> = ({ about }) => {
  const logo = useSettingsStore(state => state.logo)
  if (!logo) return null

  return (
    <Stack sx={{ rowGap: '24px', maxWidth: '235px' }}>
      <Box component={'img'} src={logo} alt="logo" width={'90px'} height={'110px'} />
      <Typography variant="bodyLight">{about}</Typography>
      <SocialMedia />
    </Stack>
  )
}

export default AboutUs
