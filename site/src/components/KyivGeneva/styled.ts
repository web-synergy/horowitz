import { Stack, StackProps, styled } from '@mui/material'

export const MainStack = styled(Stack)<StackProps>(({ theme }) => ({
  marginBottom: '72px',
  rowGap: '48px',

  [theme.breakpoints.up('md')]: {
    marginBottom: '90px',
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: '120px',
    rowGap: '120px',
  },
}))
