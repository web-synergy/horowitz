import { Container, Stack, useMediaQuery, useTheme } from '@mui/material'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useSettingsStore } from '@/store'

import { useTranslation } from 'react-i18next'
import AboutUs from './parts/AboutUs'
import FooterContacts from './parts/FooterContacts'
import FooterPressCenter from './parts/FooterPressCenter'
import { Section } from './styled'

const Footer: FC<PropsWithChildren> = () => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const {
    i18n: { language },
  } = useTranslation()

  const about = useSettingsStore(state => state.about)
  const contacts = useSettingsStore(state => state.contacts)
  const { address: location, email, phone } = contacts
  const fetchData = useSettingsStore(state => state.fetchSettings)

  useEffect(() => {
    fetchData(language)
  }, [language])

  return (
    <Section>
      <Container component={'footer'}>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <AboutUs about={about} />
          <FooterContacts {...{ isMobile, location, email, phone }} />
          <FooterPressCenter />
        </Stack>
      </Container>
    </Section>
  )
}

export default Footer
