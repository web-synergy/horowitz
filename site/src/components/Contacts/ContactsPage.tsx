import { Routes } from '@/types/routes.d'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Container, Divider, Typography } from '@mui/material'
import SocialMedia from '../Common/SocialMedia'
import ContactsField from './parts/ContactsField'

import { ContentStack, ContentWrapper } from './styled'

import { useSettingsStore } from '@/store/settingStore'
import { Contacts } from '@/types/translation.d'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import PageTemplate from '../Common/PageTemplate'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        variant="bodyRegular"
        sx={{ color: theme => theme.palette.neutral[20] }}
        component={'p'}
      >
        {children}
      </Typography>
    ),
  },
}
const ContactsPage: FC = () => {
  const { t } = useTranslation()

  const contacts = useSettingsStore(state => state.contacts)
  if (!contacts) return null

  const { address: location, phone, email, pressCenter, about } = contacts

  return (
    <PageTemplate mode="dark">
      <Container>
        <Typography
          variant="h2"
          component={'h1'}
          sx={{
            marginBottom: {
              xs: 3,
              md: 5,
              lg: 6,
            },
          }}
        >
          {t(`navigation.${Routes.CONTACTS}`)}
        </Typography>
        <ContentWrapper>
          <Box>
            <Box sx={{ '& :first-of-type': { marginBottom: 2 } }}>
              <PortableText value={about[0]} components={components} />
            </Box>
            <Divider variant="light" sx={{ marginTop: 3 }} />
          </Box>

          {/* location, phone, email */}
          <ContentStack sx={{ position: 'relative' }}>
            <ContactsField title={t(`contacts.${Contacts.ADDRESS}`)} details={location} />
            <ContactsField
              variant="phone"
              title={t(`contacts.${Contacts.PHONE}`)}
              details={phone}
            />
            <ContactsField variant="email" title="E-mail" details={email} />
            <Divider
              variant="light"
              sx={{
                marginTop: { md: '6px' },
              }}
            />
          </ContentStack>

          {/* press center */}
          <ContentStack>
            <ContactsField
              variant="phone"
              title={t(`contacts.${Contacts.PRESS_CENTER}`)}
              details={pressCenter.phone}
            />
            <ContactsField variant="email" title="E-mail" details={pressCenter.email} />
            <Divider
              variant="light"
              sx={{
                marginTop: { md: '6px' },
              }}
            />
          </ContentStack>
          <SocialMedia />
        </ContentWrapper>
      </Container>
    </PageTemplate>
  )
}

export default ContactsPage
