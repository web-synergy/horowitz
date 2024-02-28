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
  marks: {
    nw: ({ children }) => {
      return <span style={{ textWrap: 'nowrap' }}>{children}</span>;
    },
    color: ({ value, children }) => {
      return <span style={{ color: value?.color?.hex }}>{children}</span>;
    },
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
  block: {
    h2: ({ children }) => (
      <Typography
        component={'h2'}
        sx={{
          my: { xs: '24px', md: '40px', lg: '48px' },
        }}
        variant='h2'>
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        component={'h3'}
        sx={{
          my: { xs: '24px', md: '40px', lg: '48px' },
        }}
        variant='h3'>
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography
        component={'h4'}
        sx={{
          my: { xs: '24px', md: '32px', lg: '40px' },
        }}
        variant='h3Block'>
        {children}
      </Typography>
    ),
    normal: ({ children }) => (
      <Typography
        component={'p'}
        sx={{
          display: 'block',
          my: '16px',
          textAlign: 'justify',
        }}
        variant='bodyRegular'>
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => (
      <Typography
        component={'blockquote'}
        sx={{
          display: 'block',
          pl: '16px',
          borderLeft: 'solid 2px #141414',
          my: '16px',
        }}
        variant='blockquote'>
        {children}
      </Typography>
    ),
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
            my: '16px',
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
          my: '16px',
          pl: { xs: '24px', md: '32px' },
          lineHeight: { sx: '24px', md: '28px' },
        }}
        variant='bodyRegular'>
        {children}
      </Typography>
    ),
  },
};
