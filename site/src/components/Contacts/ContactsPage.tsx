import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import useContacts from './useContacts'

import { Routes } from '@/types/routes.d'
import Breadcrumbs from '../Common/Breadcrumbs'
import { Offset } from '../Common/Offset'
import ContactsDetails from './parts/ContactsDetails'
import Section from './parts/Section'
import { ContentWrapper, InfoDivider } from './styled'

const ContactsPage: FC = () => {
  // TODO
  // - add PortableText component
  // - use Router Link for links
  const {
    i18n: { language },
    t,
  } = useTranslation()

  const { contacts } = useContacts(language)
  const { location, phone, email, pressCenterEmail, pressCenterPhone } = contacts

  return (
    <Section component={'section'}>
      <Offset />
      <Container>
        <Breadcrumbs title="Контакти" mode="dark" />
        <ContentWrapper>
          <Typography variant="h2" component={'h1'}>
            {t(`navigation.${Routes.CONTACTS}`)}
          </Typography>
          <Box>
            <Typography variant="bodyRegular" component={'p'} sx={{ marginBottom: '16px' }}>
              {contacts.about_part1}
            </Typography>
            <Typography variant="bodyRegular" component={'p'}>
              {contacts.about_part2}
            </Typography>
            <InfoDivider variant="light" />
          </Box>
          <Box sx={{ width: '100%' }}>
            <ContactsDetails {...{ location, phone, email }} />
          </Box>
          <Box sx={{ width: '100%' }}>
            <ContactsDetails {...{ pressCenterPhone, pressCenterEmail }} />
          </Box>
          <Typography textTransform={'uppercase'}>
            There should be icons for social networks{' '}
          </Typography>
        </ContentWrapper>
      </Container>
    </Section>
  )
}

export default ContactsPage
