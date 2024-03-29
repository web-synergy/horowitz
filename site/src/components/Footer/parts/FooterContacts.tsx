import { phoneNumberFormatting } from '@/utils/helpers'

import { Routes } from '@/types/routes.d'
import { t } from 'i18next'
import { FC } from 'react'

import { Box, Stack, Typography } from '@mui/material'
import EmailDetails from './EmailDetails'
import LocationDetails from './LocationDetails'
import PhoneDetails from './PhoneDetails'

interface FooterContactsProps {
  location: string
  email: string
  phone: string
  isMobile: boolean
}

const FooterContacts: FC<FooterContactsProps> = ({ location, email, phone, isMobile }) => {
  const formattedPhoneNum = phoneNumberFormatting(phone)

  return (
    <Stack spacing={3} sx={{ maxWidth: '364px' }}>
      <Typography variant="subhead" sx={{ color: theme => theme.palette.common.white }}>
        {t(`navigation.${Routes.CONTACTS}`)}
      </Typography>

      <LocationDetails location={location} />

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
