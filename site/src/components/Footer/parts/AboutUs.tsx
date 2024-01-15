import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import SocialMedia from '@/components/Common/SocialMedia'
import { useSettingsStore } from '@/store'

interface AboutUsProps {
  about: string
}

const AboutUs: FC<AboutUsProps> = ({ about }) => {
  const mediaLinks = useSettingsStore(state => state.sociable)
  const logo = useSettingsStore(state => state.logo)
  if (!mediaLinks || !logo) return null

  const { facebook, instagram, youTube } = mediaLinks

  return (
    <Stack sx={{ rowGap: '24px', maxWidth: '235px' }}>
      <Box component={'img'} src={logo} alt="logo" width={'90px'} height={'110px'} />
      <Typography variant="bodyLight">{about}</Typography>
      <SocialMedia {...{ facebook, instagram, youTube }} />
    </Stack>
  )
}

export default AboutUs
