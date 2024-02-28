import { Box, Typography, styled, TypographyProps } from '@mui/material';

import bgImage from '@/assets/images/archive.webp';

export const Banner = styled(Box)(() => ({
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom center',
  backgroundSize: 'cover',
  position: 'relative',
}));

export const Overlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(8, 7, 8, 0.6)',
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '2.5rem',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: 56,
  color: theme.palette.primary.main,
  maxWidth: 800,
  position: 'relative',
  zIndex: 10,

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    lineHeight: 1.167,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 80,
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '5rem',
    lineHeight: 1,
    marginBottom: 96,
  },
}));
