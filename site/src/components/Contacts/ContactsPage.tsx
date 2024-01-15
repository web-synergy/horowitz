import { useTranslation } from 'react-i18next'

import { Routes } from '@/types/routes.d'
import { FC } from 'react'

import { Box, Container, Typography } from '@mui/material'
import Breadcrumbs from '../Common/Breadcrumbs'
import { Offset } from '../Common/Offset'
import ContactsDetails from './parts/ContactsDetails'

import { ContentWrapper, InfoDivider, Section } from './styled'

import useContacts from './useContacts'

import { useSettingsStore } from '@/store'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import SocialMedia from '../Common/SocialMedia'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography variant="bodyRegular" component={'p'}>
        {children}
      </Typography>
    ),
  },
}
const ContactsPage: FC = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation()

  const { contacts } = useContacts(language)
  const { location, phone, email, pressCenterEmail, pressCenterPhone, about } = contacts

  const mediaLinks = useSettingsStore(state => state.sociable)
  const { facebook: facebookLink, instagram: instagramLink, youTube: youtubeLink } = mediaLinks

  return (
    <Section component={'section'}>
      <Offset />
      <Container>
        <Breadcrumbs title={t(`navigation.${Routes.CONTACTS}`)} mode="dark" />
        <ContentWrapper>
          <Typography variant="h2" component={'h1'}>
            {t(`navigation.${Routes.CONTACTS}`)}
          </Typography>
          <Box>
            <Box sx={{ 'p:not(:last-child)': { marginBottom: '16px' } }}>
              <PortableText value={about[0]} components={components} />
            </Box>
            <InfoDivider variant="light" />
          </Box>
          <Box sx={{ width: '100%' }}>
            <ContactsDetails {...{ location, phone, email }} />
          </Box>
          <Box sx={{ width: '100%' }}>
            <ContactsDetails {...{ pressCenterPhone, pressCenterEmail }} />
          </Box>
          <SocialMedia {...{ facebookLink, instagramLink, youtubeLink }} />
        </ContentWrapper>
      </Container>
    </Section>
  )
}

export default ContactsPage
