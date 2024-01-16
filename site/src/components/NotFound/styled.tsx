import { Box, Typography, styled } from '@mui/material';
import notFound from '@/assets/images/notFound.png';

export const Wrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  marginBottom: 12,

  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundImage: `url(${notFound})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    zIndex: 1,
    width: 123,
    height: 180,
  },

  [theme.breakpoints.up('md')]: {
    marginBottom: 18,
    '&::after': {
      bottom: 19,
      width: 175,
      height: 256,
    },
  },

  [theme.breakpoints.up('lg')]: {
    marginBottom: 40,
    '&::after': {
      bottom: 38,
      width: 210,
      height: 307,
    },
  },
}));

export const MainTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  fontSize: '7.5rem',
  fontWeight: 500,
  lineHeight: 'normal',

  [theme.breakpoints.up('md')]: {
    fontSize: '11.875rem',
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '15rem',
  },
}));
