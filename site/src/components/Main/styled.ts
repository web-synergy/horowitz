import { styled, Typography, TypographyProps } from '@mui/material'

export const MainTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.75rem',
    lineHeight: 1.28,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
    lineHeight: 1.22,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
    lineHeight: 1.16,
  },
}))
