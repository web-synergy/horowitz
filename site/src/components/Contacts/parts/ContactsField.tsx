import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import { CustomTypography, StyledStack, Title } from './styled'

import { phoneNumberFormatting } from '@/utils/phoneNumberFormatting'
import { Link as RouterLink } from 'react-router-dom'

type Variant = 'default' | 'phone' | 'email'

type ContactsFieldProps = {
  title: string
  details: string
  variant?: Variant
}

const ContactsField: FC<ContactsFieldProps> = ({ title, variant = 'default', details }) => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const getField = (mode: Variant, content: string, isMobile?: boolean) => {
    if (mode === 'email') return <EmailField email={content} />
    if (mode === 'phone') {
      return isMobile ? (
        <PhoneField phone={content} />
      ) : (
        <TextField content={phoneNumberFormatting(content)} />
      )
    }
    return <TextField content={content} />
  }

  return (
    <StyledStack>
      <Title variant="bodyMedium">{title}:</Title>
      {getField(variant, details, isMobile)}
    </StyledStack>
  )
}

export default ContactsField

// ---------- PARTS ----------

type TextFieldProp = {
  content: string
}
type PhoneFieldProp = {
  phone: string
}
type EmailFieldProp = {
  email: string
}

const TextField: FC<TextFieldProp> = ({ content }) => {
  return <CustomTypography variant="bodyRegular">{content}</CustomTypography>
}

const PhoneField: FC<PhoneFieldProp> = ({ phone }) => {
  return (
    <Box
      component={RouterLink}
      to={`tel:${phone}`}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'text',
        width: 'fit-content',
      }}
    >
      <CustomTypography variant="bodyRegular">{phoneNumberFormatting(phone)}</CustomTypography>
    </Box>
  )
}

const EmailField: FC<EmailFieldProp> = ({ email }) => {
  return (
    <Link href={`mailto:${email}`}>
      <CustomTypography variant="bodyRegular">{email}</CustomTypography>
    </Link>
  )
}
