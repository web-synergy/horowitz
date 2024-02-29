import { Stack, StackProps, styled } from '@mui/material';

export const MainStack = styled(Stack)<StackProps>(({ theme }) => ({
  paddingTop: 24,
  paddingBottom: 72,
  rowGap: 24,

  [theme.breakpoints.up('md')]: {
    paddingTop: 40,
    paddingBottom: 96,
    rowGap: 40,
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: 48,
    paddingBottom: 120,
    rowGap: 48,
  },
}));
