import useContacts from './useContacts'

import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'

import Breadcrumbs from '../Common/Breadcrumbs'
import ContactsDetails from './parts/ContactsDetails'
import Section from './parts/Section'
import { ContentWrapper, InfoDivider } from './styled'

const Contacts: FC = () => {
  // TODO
  // - write a function to get the current language
  // - translate static content

  const { contacts } = useContacts('ua')
  const { location, phone, email, pressCenterEmail, pressCenterPhone } = contacts

  return (
    <Section component={'section'}>
      <Container>
        <Breadcrumbs title="Контакти" mode="dark" />
        <ContentWrapper>
          <Typography variant="h2" component={'h1'}>
            Контакти
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

export default Contacts
