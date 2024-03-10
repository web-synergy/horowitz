import { styled, Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  display: 'block',
  textAlign: 'justify',
  margin: '24px 0',
  [theme.breakpoints.up('md')]: {
    margin: '40px 0',
  },

  [theme.breakpoints.up('lg')]: {
    margin: '48px 0 ',
  },
}));

export const RichText = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  marginBottom: '16px',
}));
