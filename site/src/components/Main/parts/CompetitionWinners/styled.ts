import { Box, BoxProps, Typography, TypographyProps, styled } from '@mui/material'

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: '72px 0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '96px 0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '120px 0',
  },
}))

export const MainTitle = styled(Typography)<TypographyProps>(({ theme, variant }) => ({
  ...(variant === 'h1' && {
    [theme.breakpoints.only('md')]: {
      fontSize: '36px',
    },
  }),
  [theme.breakpoints.down('md')]: {
    maxWidth: '',
  },
}))
