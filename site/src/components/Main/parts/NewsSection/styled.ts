import { Container, Typography, TypographyProps, styled } from '@mui/material'

export const CardTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 400,
  fontStyle: 'normal',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.375rem',
    lineHeight: 1.36,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
    lineHeight: 1.333,
  },
}))

export const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    '&.MuiContainer-root': { paddingRight: 0 },
  },
}))
