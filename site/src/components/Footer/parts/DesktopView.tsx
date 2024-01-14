import { useSettingsStore } from '@/store'
import { Stack, useMediaQuery, useTheme } from '@mui/material'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AboutUs from './AboutUs'
import Copyright from './Copyright'
import FooterContacts from './FooterContacts'
import FooterPressCenter from './FooterPressCenter'

const DesktopView: FC = () => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const {
    i18n: { language },
  } = useTranslation()

  const about = useSettingsStore(state => state.about)
  const contacts = useSettingsStore(state => state.contacts)
  const { address: location, email, phone, pressCenter } = contacts
  const fetchData = useSettingsStore(state => state.fetchSettings)

  useEffect(() => {
    fetchData(language)
  }, [language])
  return (
    <>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <AboutUs about={about} />
        <FooterContacts {...{ isMobile, location, email, phone }} />
        <FooterPressCenter {...{ isMobile, phone: pressCenter.phone, email: pressCenter.email }} />
      </Stack>
      <Copyright />
    </>
  )
}

export default DesktopView
