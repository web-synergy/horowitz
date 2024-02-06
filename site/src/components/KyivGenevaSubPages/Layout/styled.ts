import { Box, styled } from '@mui/material';

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',

  margin: '0 auto',
  backgroundColor: 'rgba(8, 7, 8, 0.7)',
  width: '100%',
  height: '42vw',
  minHeight: 161,
  maxHeight: '544px',

  '&:after, &:before': {
    content: "''",
    position: 'absolute',
    width: '10%',
    top: 0,
    bottom: 0,
  },

  '&:after': {
    left: 0,
    background:
      'linear-gradient(90deg, rgb(8, 7, 8), rgba(8, 7, 8, 0.1) 80%, transparent)',
  },

  '&:before': {
    right: 0,
    background:
      'linear-gradient(90deg, transparent, rgba(8, 7, 8, 0.1) 20%, rgb(8, 7, 8))',
  },

  [theme.breakpoints.up('lg')]: {
    '&:after, &:before': {
      width: '20%',
    },
  },
}));
