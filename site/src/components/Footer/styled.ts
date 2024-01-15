import { Box, styled } from '@mui/material'

export const Section = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.secondaryBlack,
  color: theme.palette.neutral[20],

  [theme.breakpoints.up('xs')]: {
    padding: '56px 0 56px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '40px 0 40px',
  },
}))
