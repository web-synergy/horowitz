import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'
import Breadcrumbs from '../Common/Breadcrumbs'
import ContactsDetails from './parts/ContactsDetails'
import Section from './parts/Section'
import { ContentWrapper, InfoDivider, MainTitle, SubTitle } from './styled'

const Contacts: FC = () => {
  const { location, phone, email, pressCenterEmail, pressCenterPhone } = {
    location: 'вул. Гетьмана Павла Скоропадського, 31, Київ, 01032, Україна',
    phone: '380442883238',
    email: 'horowitz@horowitzv.org',
    pressCenterPhone: '380972696416',
    pressCenterEmail: 's.antoniuk.horowitz@gmail.com',
  }

  return (
    <Section component={'section'}>
      <Container>
        <Breadcrumbs title="Контакти" mode="dark" />
        <ContentWrapper>
          <MainTitle component={'h1'}>Контакти</MainTitle>
          <Box>
            <SubTitle component={'p'} sx={{ marginBottom: '16px' }}>
              Київська муніципальна академія музики імені Р. М. Глієра
            </SubTitle>
            <SubTitle component={'p'}>
              Адміністрація міжнародного конкурсу молодих піаністів пам'яті Володимира Горовиця
            </SubTitle>
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
