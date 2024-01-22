import { PortableTextComponents } from '@portabletext/react';
import { ImageComponent, ImagesArray } from './ImageComponent';
import ReactPlayer from 'react-player';
import { Box, Link, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import GrowView from '@/components/Common/GrowView';

export const components: PortableTextComponents = {
  types: {
    gallery: ImagesArray,
    youtube: ({ value }) => {
      const { url } = value;
      return (
        <GrowView>
          <Box sx={{ mb: '24px' }}>
            <ReactPlayer
              style={{ width: '100%', height: '500px' }}
              width={'100%'}
              height={480}
              controls
              url={url}
            />
          </Box>
        </GrowView>
      );
    },
    image: ImageComponent,
  },
  block: {
    h1: ({ children }) => (
      <GrowView>
        <Typography variant='h1'>{children}</Typography>
      </GrowView>
    ),
    h2: ({ children }) => (
      <GrowView>
        <Typography variant='h2'>{children}</Typography>
      </GrowView>
    ),
    h3: ({ children }) => (
      <GrowView>
        <Typography
          sx={{
            mb: { xs: '24px', md: '32px' },
            mt: { xs: '24px', md: '40px' },
          }}
          variant='h3'>
          {children}
        </Typography>
      </GrowView>
    ),
    h4: ({ children }) => (
      <GrowView>
        <Typography variant='h4'>{children}</Typography>
      </GrowView>
    ),
    normal: ({ children }) => (
      <GrowView>
        <Typography
          component={'p'}
          sx={{
            display: 'block',
            my: { xs: '24px', md: '32px' },
            textAlign: 'justify',
          }}
          variant='bodyRegular'>
          {children}
        </Typography>
      </GrowView>
    ),
    p: ({ children }) => (
      <Typography variant='bodyRegular'>{children}</Typography>
    ),
    blockquote: ({ children }) => (
      <GrowView>
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
      </GrowView>
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
        <GrowView>
          <Typography
            component={'ul'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              my: { xs: '24px', md: '32px' },
            }}
            variant='bodyRegular'>
            {children}
          </Typography>
        </GrowView>
      );
    },

    number: ({ children }) => (
      <GrowView>
        <Typography
          component={'ol'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            my: { xs: '24px', md: '32px' },
          }}
          variant='bodyRegular'>
          {children}
        </Typography>
      </GrowView>
    ),
  },
};
