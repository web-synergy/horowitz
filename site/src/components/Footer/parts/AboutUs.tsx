import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import SocialMedia from '@/components/Common/SocialMedia'
import { useSettingsStore } from '@/store'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import logo from '../temp/logo.svg'

interface AboutUsProps {
  about: never[]
}

const AboutUs: FC<AboutUsProps> = ({ about }) => {
  const mediaLinks = useSettingsStore(state => state.sociable)

  const { facebook: facebookLink, instagram: instagramLink, youTube: youtubeLink } = mediaLinks

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <Typography variant="bodyRegular">{children}</Typography>,
    },
  }

  return (
    <Stack sx={{ rowGap: '24px', maxWidth: '222px' }}>
      <Box component={'img'} src={logo} alt="logo" width={'90px'} height={'110px'} />
      <PortableText value={about[0]} components={components} />
      <SocialMedia {...{ facebookLink, instagramLink, youtubeLink }} />
    </Stack>
  )
}

export default AboutUs
