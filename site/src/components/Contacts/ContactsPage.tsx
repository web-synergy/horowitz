import useContacts from './useContacts';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';

import Breadcrumbs from '../Common/Breadcrumbs';
import ContactsDetails from './parts/ContactsDetails';
import Section from './parts/Section';
import { ContentWrapper, InfoDivider } from './styled';
import { Offset } from '../Common/Offset';
import { Routes } from '@/types/routes.d';

const ContactsPage: FC = () => {
  // TODO
  // - write a function to get the current language
  // - translate static content
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const { contacts } = useContacts(language);
  const { location, phone, email, pressCenterEmail, pressCenterPhone } =
    contacts;

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
            <Typography
              variant="bodyRegular"
              component={'p'}
              sx={{ marginBottom: '16px' }}
            >
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
  );
};

export default ContactsPage;
