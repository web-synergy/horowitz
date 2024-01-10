import { Box, BoxProps, styled } from '@mui/material'

const Section = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.neutral[90],
  color: theme.palette.neutral[20],
  flexGrow: 1,
}))

export default Section
