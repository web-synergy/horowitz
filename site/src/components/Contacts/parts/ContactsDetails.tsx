import { Box, Stack, StackProps, styled } from '@mui/material'
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
  if (phone) phone = phoneNumberFormatting(phone)
  if (pressCenterPhone) pressCenterPhone = phoneNumberFormatting(pressCenterPhone)

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
            <RegularText component={'p'}>{phone}</RegularText>
          </StyledStack>
        )}
        {email && (
          <StyledStack>
            <BoldText>E-mail:</BoldText>
            <RegularText component={'p'}>{email}</RegularText>
          </StyledStack>
        )}
        {pressCenterPhone && (
          <StyledStack>
            <BoldText>Прес-центр:</BoldText>
            <RegularText component={'p'}>{pressCenterPhone}</RegularText>
          </StyledStack>
        )}
        {pressCenterEmail && (
          <StyledStack>
            <BoldText>E-mail:</BoldText>
            <RegularText component={'p'}>{pressCenterEmail}</RegularText>
          </StyledStack>
        )}
      </ContentStack>
      <InfoDivider variant="light" />
    </Box>
  )
}

export default ContactsDetails
