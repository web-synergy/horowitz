import { Box, styled } from '@mui/material';
import banner from '@/assets/images/kyiv-geneva/banner.jpg';
import text from '@/assets/images/kyiv-geneva/text-eng.svg';

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',

  margin: '0 auto',
  backgroundColor: 'rgba(8, 7, 8, 0.4)',
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

export const Image = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: '-1',
}));

export const TextWrapper = styled(Box)(() => ({
  position: 'absolute',
  bottom: '2%',
  width: '100%',
  height: '30%',
  zIndex: 100,
}));

export const Text = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '95%',
  height: '100%',
  maxWidth: '1280px',
  backgroundImage: `url(${text})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  [theme.breakpoints.up('lg')]: {
    width: '70%',
  },
}));
