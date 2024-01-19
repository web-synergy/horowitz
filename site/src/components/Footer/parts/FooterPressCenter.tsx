import { phoneNumberFormatting } from '@/utils/helpers'
import { Box, Stack, Typography } from '@mui/material'
import { t } from 'i18next'
import { FC } from 'react'
import EmailDetails from './EmailDetails'
import PhoneDetails from './PhoneDetails'

interface FooterPressCenterProps {
  email: string
  phone: string
  isMobile: boolean
}

const FooterPressCenter: FC<FooterPressCenterProps> = ({ email, phone, isMobile }) => {
  const formattedPhoneNum = phoneNumberFormatting(phone)
  return (
    <Stack spacing={3} maxWidth={'299px'}>
      <Typography variant="subhead">{t('contacts.pressCenter')}</Typography>

      <Box>
        <EmailDetails email={email} />
      </Box>

      <Box>
        <PhoneDetails isMobile={isMobile} phone={formattedPhoneNum} />
      </Box>
    </Stack>
  )
}

export default FooterPressCenter
