import { PortableTextComponents } from '@portabletext/react';
import { ImageComponent, ImagesArray } from './ImageComponent';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import YouTube from './YouTube';

export const components: PortableTextComponents = {
  types: {
    gallery: ImagesArray,
    youtube: YouTube,
    image: ImageComponent,
  },
  block: {
    h1: ({ children }) => (
      <Typography
        sx={{
          mb: { xs: '24px', md: '32px' },
          mt: { xs: '24px', md: '40px' },
        }}
        variant='h1'>
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        sx={{
          mb: { xs: '24px', md: '32px' },
          mt: { xs: '24px', md: '40px' },
        }}
        variant='h2'>
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        sx={{
          mb: { xs: '24px', md: '32px' },
          mt: { xs: '24px', md: '40px' },
        }}
        variant='h3'>
        {children}
      </Typography>
    ),
    h4: ({ children }) => <Typography variant='h4'>{children}</Typography>,
    normal: ({ children }) => (
      <Typography
        component={'p'}
        sx={{
          display: 'block',
          my: { xs: '24px', lg: '32px' },
          textAlign: 'justify',
        }}
        variant='bodyRegular'>
        {children}
      </Typography>
    ),
    p: ({ children }) => (
      <Typography variant='bodyRegular'>{children}</Typography>
    ),
    blockquote: ({ children }) => (
      <Typography
        component={'blockquote'}
        sx={{
          display: 'block',
          pl: '16px',
          borderLeft: 'solid 2px #141414',
          my: { xs: '24px', lg: '32px' },
        }}
        variant='blockquote'>
        {children}
      </Typography>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <Link
          component={RouterLink}
          variant='linkBlock'
          to={value?.href}
          target={target}>
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => {
      return (
        <Typography
          component={'ul'}
          sx={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
            my: { xs: '24px', md: '24px', lg: '32px' },
            pl: { xs: '24px', md: '32px' },
            lineHeight: { sx: '24px', md: '28px' },
          }}
          variant='bodyRegular'>
          {children}
        </Typography>
      );
    },

    number: ({ children }) => (
      <Typography
        component={'ol'}
        sx={{
          display: 'flex',
          gap: '8px',
          flexDirection: 'column',
          my: { xs: '24px', md: '32px' },
          lineHeight: { sx: '24px', md: '28px' },
        }}
        variant='bodyRegular'>
        {children}
      </Typography>
    ),
  },
};
