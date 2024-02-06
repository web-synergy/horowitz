import { styled, Box, Typography } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',

  '& img': {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '40vh',
    margin: '0 auto',
    marginBottom: 24,
  },

  [theme.breakpoints.up('md')]: {
    '& img': {
      float: 'right',
      marginLeft: 24,
      marginBottom: 8,
      width: '50%',
      maxHeight: 'unset',
    },
  },

  [theme.breakpoints.up('lg')]: {
    columnCount: 2,
    columnGap: 24,
    paddingTop: '46%',

    '&:before': {
      content: '""',
      display: 'block',
      marginBottom: '-95%',
    },

    '& > *': {
      backfaceVisibility: 'hidden',
    },

    '& img': {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 'calc(50% - 12px)',
      height: 500,

      objectFit: 'cover',
      margin: 0,
    },
  },
}));

export const TextBlock = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  display: 'block',

  '&:not(last-of-type)': {
    marginBottom: 8,
  },

  [theme.breakpoints.up('lg')]: {
    '&:not(last-of-type)': {
      marginBottom: 24,
    },
  },
}));
