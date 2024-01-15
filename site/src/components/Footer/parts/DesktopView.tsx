import { useSettingsStore } from '@/store'
import { Stack, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import AboutUs from './AboutUs'
import Copyright from './Copyright'
import FooterContacts from './FooterContacts'
import FooterPressCenter from './FooterPressCenter'

const DesktopView: FC = () => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const {
    t,
    i18n: { language },
  } = useTranslation()

  const contacts = useSettingsStore(state => state.contacts[language])

  if (!contacts) return null

  const { address: location, email, phone, pressCenter } = contacts

  return (
    <>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <AboutUs about={t('institutional_name')} />
        <FooterContacts {...{ isMobile, location, email, phone }} />
        <FooterPressCenter {...{ isMobile, phone: pressCenter.phone, email: pressCenter.email }} />
      </Stack>
      <Copyright />
    </>
  )
}

export default DesktopView
