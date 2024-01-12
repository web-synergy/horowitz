import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material'

import { ContactsDetailsProps } from '@/types/сontactsTypes'
import { FC } from 'react'

import { t } from 'i18next'

import { phoneNumberFormatting } from '../../../utils/helpers'

import { Link as RouterLink } from 'react-router-dom'
import { DescBox, InfoDivider } from '../styled'
import { ContentStack, StyledStack } from './styled'

const ContactsDetails: FC<ContactsDetailsProps> = ({
  location,
  phone,
  email,
  pressCenterPhone,
  pressCenterEmail,
}) => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  return (
    <Box>
      <ContentStack>
        {location && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">{t('contacts.address')}</Typography>
            </DescBox>
            <Typography variant="bodyRegular" component={'p'}>
              {location}
            </Typography>
          </StyledStack>
        )}
        {phone && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">{t('contacts.phone')}</Typography>
            </DescBox>
            <Link component={RouterLink} to={isMobile ? `tel:${phone}` : ''}>
              <Typography variant="bodyRegular" component={'p'}>
                {phoneNumberFormatting(phone)}
              </Typography>
            </Link>
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
              <Typography variant="bodyMedium">{t('contacts.pressCenter')}</Typography>
            </DescBox>
            <Link component={RouterLink} to={isMobile ? `tel:${pressCenterPhone}` : ''}>
              <Typography variant="bodyRegular" component={'p'}>
                {phoneNumberFormatting(pressCenterPhone)}
              </Typography>
            </Link>
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
  )
}

export default ContactsDetails
