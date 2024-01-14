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
  const isTablet = useMediaQuery(breakpoints.down('lg'))

  const {
    i18n: { language },
  } = useTranslation()

  const about = useSettingsStore(state => state.about)
  const contacts = useSettingsStore(state => state.contacts)
  const { address: location, email, phone, pressCenter } = contacts
  const fetchData = useSettingsStore(state => state.fetchSettings)

  console.log(isMobile)

  useEffect(() => {
    fetchData(language)
  }, [language])

  return (
    <Section>
      <Container component={'footer'}>
        {isTablet ? (
          <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: '56px' }}>
            <AboutUs about={about} />
            <Stack
              sx={{
                flexDirection: { xs: 'column', md: 'row' },
                gap: '56px',
                flexWrap: 'wrap',
              }}
            >
              <FooterContacts {...{ isMobile, location, email, phone }} />
              <FooterPressCenter
                {...{ isMobile, phone: pressCenter.phone, email: pressCenter.email }}
              />
            </Stack>
          </Stack>
        ) : (
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <AboutUs about={about} />

            <FooterContacts {...{ isMobile, location, email, phone }} />
            <FooterPressCenter
              {...{ isMobile, phone: pressCenter.phone, email: pressCenter.email }}
            />
          </Stack>
        )}
      </Container>
    </Section>
  )
}

export default Footer
