import { Stack, StackProps, styled } from '@mui/material'

export const MainStack = styled(Stack)<StackProps>(({ theme }) => ({
  marginTop: 24,
  marginBottom: 72,
  rowGap: 24,

  [theme.breakpoints.up('md')]: {
    marginTop: 48,
    marginBottom: 96,
    rowGap: 48,
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: 120,
  },
}))
