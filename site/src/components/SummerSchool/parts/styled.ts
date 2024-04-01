import { Box, styled } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    marginRight: '-40px',
  },
  [theme.breakpoints.down('md')]: {
    marginRight: '-16px',
  },
}))
