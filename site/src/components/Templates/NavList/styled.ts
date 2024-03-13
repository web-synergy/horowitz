import { Stack, styled } from '@mui/material';

export const LinksListStack = styled(Stack)(({ theme }) => ({
  maxHeight: '100%',
  rowGap: '24px',
  alignItems: 'center',
  alignContent: 'center', // центрує лінки відносно контейнера

  [theme.breakpoints.up('md')]: {
    flexWrap: 'wrap',
    columnGap: '68px',
  },
  [theme.breakpoints.up('lg')]: {
    columnGap: '56px',
    rowGap: '48px',
  },
}));
