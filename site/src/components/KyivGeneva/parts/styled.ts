import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Stack,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material'
import { ImgHTMLAttributes } from 'react'
import { LinkProps } from 'react-router-dom'

export const Caption = styled(Typography)<TypographyProps>(
  ({ theme: { breakpoints, palette } }) => ({
    color: palette.neutral[60],
    fontSize: '0.5rem',
    lineHeight: 2,
    textAlign: 'justify',

    [breakpoints.up('md')]: {
      fontSize: '0.75rem',
      lineHeight: 1.33,
    },
  })
)

export const StyledButton = styled(Button)<ButtonProps & LinkProps>(({ theme }) => ({
  width: '288px',
  marginTop: '24px',
  alignSelf: 'center',
  [theme.breakpoints.up('md')]: {
    alignSelf: 'flex-end',
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: '7.1%',
  },
}))

export const AboutTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'capitalize',
  marginBottom: '24px',

  [theme.breakpoints.up('md')]: {
    marginBottom: '40px',
  },

  [theme.breakpoints.up('lg')]: {
    marginBottom: '48px',
  },
}))

export const AboutStack = styled(Stack)(({ theme }) => ({
  maxHeight: '100%',
  flexWrap: 'wrap',
  rowGap: '16px',

  [theme.breakpoints.up('lg')]: {
    maxHeight: '350px',
    columnGap: '24px',
  },
}))

export const MainBox = styled(Box)(() => ({
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
}))

export const BgImage = styled(Box)<BoxProps & ImgHTMLAttributes<string>>(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

export const ButtonsListStack = styled(Stack)(({ theme }) => ({
  margin: '48px 0',
  rowGap: '24px',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    margin: '96px 0',
    flexWrap: 'wrap',
    height: '396px',
    columnGap: '68px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '120px 0',
    height: '277px',
    columnGap: '56px',
    rowGap: '48px',
  },
}))
