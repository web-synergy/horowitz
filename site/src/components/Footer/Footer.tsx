import { Container, Stack } from '@mui/material'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useSettingsStore } from '@/store'
import { useTranslation } from 'react-i18next'
import AboutUs from './parts/AboutUs'
import FooterContacts from './parts/FooterContacts'
import FooterPressCenter from './parts/FooterPressCenter'
import { Section } from './styled'

const Footer: FC<PropsWithChildren> = () => {
  const {
    i18n: { language },
  } = useTranslation()

  const about = useSettingsStore(state => state.about)
  const fetchData = useSettingsStore(state => state.fetchSettings)

  useEffect(() => {
    fetchData(language)
  }, [language])

  return (
    <Section>
      <Container component={'footer'}>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <AboutUs about={about} />
          <FooterContacts />
          <FooterPressCenter />
        </Stack>
      </Container>
    </Section>
  )
}

export default Footer
