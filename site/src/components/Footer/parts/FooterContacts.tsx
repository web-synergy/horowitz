import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon'
import { Routes } from '@/types/routes.d'
import { Box, Stack, Typography } from '@mui/material'
import { t } from 'i18next'
import { FC } from 'react'
import { DetailsStack } from '../styled'

import { phoneNumberFormatting } from '@/utils/helpers'
import EmailDetails from './EmailDetails'
import PhoneDetails from './PhoneDetails'

interface FooterContactsProps {
  location: string
  email: string
  phone: string
  isMobile: boolean
}

const FooterContacts: FC<FooterContactsProps> = ({ location, email, phone, isMobile }) => {
  const formattedPhoneNum = phoneNumberFormatting(phone, 3)

  return (
    <Stack spacing={3}>
      <Typography variant="subhead">{t(`navigation.${Routes.CONTACTS}`)}</Typography>

      <DetailsStack>
        <SvgSpriteIcon icon="location" />
        <Typography variant="bodyRegular">{location}</Typography>
      </DetailsStack>

      <Box>
        <EmailDetails email={email} />
      </Box>

      <Box>
        <PhoneDetails phone={formattedPhoneNum} isMobile={isMobile} />
      </Box>
    </Stack>
  )
}

export default FooterContacts
