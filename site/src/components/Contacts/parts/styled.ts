import { Stack, StackProps, styled } from '@mui/material'

export const StyledStack = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    rowGap: '8px',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    columnGap: '24px',
  },
}))

export const ContentStack = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    rowGap: '24px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '18px',
  },
}))
