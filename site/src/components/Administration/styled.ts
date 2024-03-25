import { Box, styled } from '@mui/material';

interface BannerWrapperProps {
  img: string;
}

export const BannerWrapper = styled(Box)<BannerWrapperProps>(({ img }) => ({
  width: '100%',
  height: '46vw',
  minHeight: '314px',
  maxHeight: '42vh',

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `linear-gradient(to right, rgba(8, 7, 8, 0.60), rgba(8, 7, 8, 0.60)), url(${img})`,
}));

export const WrapperImg = styled(Box)(({ theme }) => ({
  maxWidth: '320px',

  '& img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',

    [theme.breakpoints.up('md')]: {
      width: 144,
      height: 144,
      minWidth: 144,
    },

    [theme.breakpoints.up('lg')]: {
      width: 262,
      height: 262,
      minWidth: 262,
    },
  },
}));

export const TextBlock = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '16px',
  lineHeight: '24px',

  [theme.breakpoints.up('md')]: {
    lineHeight: '28px',
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
}));
