import { Box, BoxProps, styled } from '@mui/material'
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

const StyledBox = styled(Box)<BoxProps>(() => ({
  display: 'inline-block',
  'p:not(:last-child)': {
    marginBottom: '18px',
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
    <Box sx={{ display: 'inline-block' }}>
      <StyledBox
        sx={{
          width: '140px',
        }}
      >
        {location && <BoldText component={'p'}>Адреса:</BoldText>}
        {phone && <BoldText component={'p'}>Телефон:</BoldText>}
        {pressCenterPhone && <BoldText component={'p'}>Прес-центр:</BoldText>}
        {email && <BoldText component={'p'}>E-mail:</BoldText>}
        {pressCenterEmail && <BoldText component={'p'}>E-mail:</BoldText>}
      </StyledBox>
      <StyledBox>
        {location && <RegularText component={'p'}>{location}</RegularText>}
        {phone && <RegularText component={'p'}>{phone}</RegularText>}
        {email && <RegularText>{email}</RegularText>}
        {pressCenterPhone && <RegularText component={'p'}>{pressCenterPhone}</RegularText>}
        {pressCenterEmail && <RegularText component={'p'}>{pressCenterEmail}</RegularText>}
      </StyledBox>
      <InfoDivider />
    </Box>
  )
}

export default ContactsDetails
