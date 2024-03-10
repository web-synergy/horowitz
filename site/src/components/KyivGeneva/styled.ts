import { Stack, StackProps, styled } from '@mui/material';

export const MainStack = styled(Stack)<StackProps>(({ theme }) => ({
  rowGap: 24,

  [theme.breakpoints.up('md')]: {
    rowGap: 40,
  },
  [theme.breakpoints.up('lg')]: {
    rowGap: 48,
  },
}));
