import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import SocialMedia from '@/components/Common/SocialMedia'
import { useSettingsStore } from '@/store'
import logo from '../temp/logo.svg'

interface AboutUsProps {
  about: string
}

const AboutUs: FC<AboutUsProps> = ({ about }) => {
  const mediaLinks = useSettingsStore(state => state.sociable)

  const { facebook: facebookLink, instagram: instagramLink, youTube: youtubeLink } = mediaLinks

  return (
    <Stack sx={{ rowGap: '24px', maxWidth: '235px' }}>
      <Box component={'img'} src={logo} alt="logo" width={'90px'} height={'110px'} />
      <Typography variant="bodyLight">{about}</Typography>
      {/* <PortableText value={about[0]} components={components} /> */}
      <SocialMedia {...{ facebookLink, instagramLink, youtubeLink }} />
    </Stack>
  )
}

export default AboutUs
