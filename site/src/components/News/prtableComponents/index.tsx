import { PortableTextComponents } from '@portabletext/react';
import { ImageComponent } from './ImageComponent';
import ReactPlayer from 'react-player';
import { Box, Grow, Typography } from '@mui/material';
import PortableSwiper from './Swiper';

export const components: PortableTextComponents = {
  types: {
    gallery: PortableSwiper,
    youtube: ({ value }) => {
      const { url } = value;
      return (
        <Box sx={{ mb: '24px' }}>
          <ReactPlayer width={'100%'} height={'480px'} url={url} />
        </Box>
      );
    },
    image: ImageComponent,
  },
  block: {
    h1: ({ children }) => <Typography variant='h1'>{children}</Typography>,
    h2: ({ children }) => <Typography variant='h2'>{children}</Typography>,
    h3: ({ children }) => (
      <Grow in={true} timeout={1000} translate='yes'>
        <Typography
          sx={{
            display: 'block',
            mb: { xs: '24px', md: '32px' },
          }}
          variant='h3'>
          {children}
        </Typography>
      </Grow>
    ),
    h4: ({ children }) => <Typography variant='h4'>{children}</Typography>,
    normal: ({ children }) => (
      <Grow in={true} timeout={1000} translate='yes'>
        <Typography
          sx={{
            display: 'block',
            mb: { xs: '24px', md: '32px' },
            textAlign: 'justify',
          }}
          variant='bodyRegular'>
          {children}
        </Typography>
      </Grow>
    ),
    p: ({ children }) => (
      <Typography variant='bodyRegular'>{children}</Typography>
    ),
    blockquote: ({ children }) => (
      <Typography
        sx={{
          display: 'block',
          pl: '24px',
          borderLeft: 'solid 2px #141414',
          mb: { xs: '24px', lg: '32px' },
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
        <a href={value?.href} target={target}>
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <Box
        component={'ul'}
        sx={{
          display: 'flex',
          flexDirection: 'column',

          mb: { xs: '24px', md: '32px' },
        }}>
        <Typography variant='bodyRegular'> {children}</Typography>
      </Box>
    ),

    number: ({ children }) => (
      <Box
        component={'ol'}
        sx={{
          display: 'flex',
          flexDirection: 'column',

          mb: { xs: '24px', md: '32px' },
        }}>
        <Typography variant='bodyRegular'> {children}</Typography>
      </Box>
    ),
  },
};
