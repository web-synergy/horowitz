import { Box, Container, Stack } from '@mui/material'
import { FC } from 'react'
import Breadcrumbs from '../Common/Breadcrumbs'
import ContactsDetails from './parts/ContactsDetails'
import Section from './parts/Section'
import { ContentWrapper, InfoDivider, MainTitle, RegularText } from './styled'

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
          <Stack sx={{ rowGap: '48px' }}>
            <Box>
              <Box sx={{ display: 'inline-block' }}>
                <RegularText component={'p'} sx={{ marginBottom: '16px' }}>
                  Київська муніципальна академія музики імені Р. М. Глієра
                </RegularText>
                <RegularText component={'p'}>
                  Адміністрація міжнародного конкурсу молодих піаністів пам'яті Володимира Горовиця
                </RegularText>
                <InfoDivider />
              </Box>
            </Box>
            <Box>
              <ContactsDetails {...{ location, phone, email }} />
            </Box>
            <Box>
              <ContactsDetails {...{ pressCenterPhone, pressCenterEmail }} />
            </Box>
          </Stack>
        </ContentWrapper>
      </Container>
    </Section>
  )
}

export default Contacts
