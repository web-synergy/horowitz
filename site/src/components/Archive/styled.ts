import { Box, Typography, styled, TypographyProps } from '@mui/material';

import bgImage from '@/assets/images/archive.jpg';

export const Banner = styled(Box)(() => ({
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom center',
  backgroundSize: 'cover',
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '40px',
  lineHeight: '48px',
  textAlign: 'center',
  marginBottom: 56,

  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
    lineHeight: '56px',
    marginBottom: 48,
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '80px',
    lineHeight: 1,
    marginBottom: 96,
  },
}));
