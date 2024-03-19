import { Box, Typography, styled } from '@mui/material';
import notFound from '@/assets/images/notFound.png';

export const Wrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  marginBottom: 7,

  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 11,
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
    marginBottom: 16,
    '&::after': {
      bottom: 22,
      width: 175,
      height: 256,
    },
  },

  [theme.breakpoints.up('lg')]: {
    marginBottom: 40,
    '&::after': {
      bottom: 37,
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
  display: 'block',

  [theme.breakpoints.up('md')]: {
    fontSize: '11.875rem',
    lineHeight: 1.184,
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '15rem',
  },
}));
