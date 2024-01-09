import { Box, Link, Stack, StackProps, styled, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'

import { phoneNumberFormatting } from '../helpers'
import { BoldText, InfoDivider, RegularText } from '../styled'

interface ContactsDetailsProps {
  location?: string
  phone?: string
  email?: string
  pressCenterPhone?: string
  pressCenterEmail?: string
}

const StyledStack = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    rowGap: '8px',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    columnGap: '24px',
  },
}))

const ContentStack = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    rowGap: '24px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '18px',
  },
}))

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
            <BoldText>Адреса:</BoldText>
            <RegularText component={'p'}>{location}</RegularText>
          </StyledStack>
        )}
        {phone && (
          <StyledStack>
            <BoldText>Телефон:</BoldText>
            <Link
              onClick={e => !isMobile && e.preventDefault()} // щоб запобігти перезавантаженню сторінки
              href={isMobile ? `tel:${phone}` : ''}
              sx={{ color: 'inherit' }}
            >
              <RegularText component={'p'}>{phoneNumberFormatting(phone)}</RegularText>
            </Link>
          </StyledStack>
        )}
        {email && (
          <StyledStack>
            <BoldText>E-mail:</BoldText>
            <Link href={`mailto:${email}`} sx={{ color: 'inherit' }}>
              <RegularText component={'p'}>{email}</RegularText>
            </Link>
          </StyledStack>
        )}
        {pressCenterPhone && (
          <StyledStack>
            <BoldText>Прес-центр:</BoldText>
            <Link
              onClick={e => !isMobile && e.preventDefault()}
              href={isMobile ? `tel:${pressCenterPhone}` : ''}
              sx={{ color: 'inherit' }}
            >
              <RegularText component={'p'}>{phoneNumberFormatting(pressCenterPhone)}</RegularText>
            </Link>
          </StyledStack>
        )}
        {pressCenterEmail && (
          <StyledStack>
            <BoldText>E-mail:</BoldText>
            <Link href={`mailto:${pressCenterEmail}`} sx={{ color: 'inherit' }}>
              <RegularText component={'p'}>{pressCenterEmail}</RegularText>
            </Link>
          </StyledStack>
        )}
      </ContentStack>
      <InfoDivider variant="light" />
    </Box>
  )
}

export default ContactsDetails
