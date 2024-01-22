import { useTranslation } from 'react-i18next'

import { Routes } from '@/types/routes.d'
import { FC } from 'react'

import { Box, Container, Typography } from '@mui/material'
import Breadcrumbs from '../Common/Breadcrumbs'
import { Offset } from '../Common/Offset'
import ContactsDetails from './parts/ContactsDetails'

import { ContentWrapper, InfoDivider, MainBox, Section } from './styled'

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

  const contacts = useSettingsStore(state => state.contacts[language])
  if (!contacts) return null

  const { address: location, phone, email, pressCenter, about } = contacts

  return (
    <Section component={'section'}>
      <Offset />
      <Container>
        <Breadcrumbs title={t(`navigation.${Routes.CONTACTS}`)} mode="dark" />
        <MainBox>
          <Typography
            variant="h2"
            component={'h1'}
            sx={{
              marginBottom: {
                xs: '24px',
                md: '40px',
              },
            }}
          >
            {t(`navigation.${Routes.CONTACTS}`)}
          </Typography>
          <ContentWrapper>
            <Box>
              <Box sx={{ '& :first-child': { marginBottom: 2 } }}>
                <PortableText value={about[0]} components={components} />
              </Box>
              <InfoDivider variant="light" />
            </Box>
            <Box sx={{ width: '100%' }}>
              <ContactsDetails {...{ location, phone, email }} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <ContactsDetails
                pressCenterPhone={pressCenter.phone}
                pressCenterEmail={pressCenter.email}
              />
            </Box>
            <SocialMedia />
          </ContentWrapper>
        </MainBox>
      </Container>
    </Section>
  )
}

export default ContactsPage
