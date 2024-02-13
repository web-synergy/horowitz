import { Box, Typography, styled, TypographyProps } from '@mui/material';

import bgImage from '@/assets/images/archive.jpg';

export const Banner = styled(Box)(() => ({
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom center',
  backgroundSize: 'cover',
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '2.5rem',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: 56,

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    lineHeight: 1.167,
    marginBottom: 40,
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '5rem',
    lineHeight: 1,
    marginBottom: 96,
  },
}));
