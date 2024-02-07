import { t } from 'i18next';

import { ContactsDetailsProps } from '@/types/contactsTypes';
import { FC } from 'react';

import { phoneNumberFormatting } from '../../../utils/helpers';

import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { DescBox, InfoDivider } from '../styled';
import { ContentStack, StyledStack } from './styled';
import { Contacts } from '@/types/translation.d';

const ContactsDetails: FC<ContactsDetailsProps> = ({
  location,
  phone,
  email,
  pressCenterPhone,
  pressCenterEmail,
}) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));

  return (
    <Box>
      <ContentStack>
        {location && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">
                {t(`contacts.${Contacts.ADDRESS}`)}:
              </Typography>
            </DescBox>
            <Typography variant="bodyRegular" component={'p'}>
              {location}
            </Typography>
          </StyledStack>
        )}
        {phone && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">
                {t(`contacts.${Contacts.PHONE}`)}:
              </Typography>
            </DescBox>
            <Box
              component={RouterLink}
              to={isMobile ? `tel:${phone}` : ''}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'text',
                width: 'fit-content',
              }}
              onClick={(e) => !isMobile && e.preventDefault()}
            >
              <Typography variant="bodyRegular" component={'p'}>
                {phoneNumberFormatting(phone)}
              </Typography>
            </Box>
          </StyledStack>
        )}
        {email && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">E-mail:</Typography>
            </DescBox>
            <Link href={`mailto:${email}`}>
              <Typography variant="bodyRegular" component={'p'}>
                {email}
              </Typography>
            </Link>
          </StyledStack>
        )}
        {pressCenterPhone && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">
                {t(`contacts.${Contacts.PRESS_CENTER}`)}:
              </Typography>
            </DescBox>
            <Box
              component={RouterLink}
              to={isMobile ? `tel:${pressCenterPhone}` : ''}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'text',
                width: 'fit-content',
              }}
              onClick={(e) => !isMobile && e.preventDefault()}
            >
              <Typography variant="bodyRegular" component={'p'}>
                {phoneNumberFormatting(pressCenterPhone)}
              </Typography>
            </Box>
          </StyledStack>
        )}
        {pressCenterEmail && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">E-mail:</Typography>
            </DescBox>
            <Link href={`mailto:${pressCenterEmail}`}>
              <Typography variant="bodyRegular" component={'p'}>
                {pressCenterEmail}
              </Typography>
            </Link>
          </StyledStack>
        )}
      </ContentStack>
      <InfoDivider variant="light" />
    </Box>
  );
};

export default ContactsDetails;
