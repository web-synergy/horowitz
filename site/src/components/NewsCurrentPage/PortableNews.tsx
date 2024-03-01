import { PortableTextComponents } from '@portabletext/react';
import {
  ImageComponent,
  ImagesArray,
} from '../PortableComponent/ImageComponent';
import { Typography } from '@mui/material';

import YouTube from '../PortableComponent/YouTube';
import {
  Blockquote,
  ColorText,
  NowRap,
  Ol,
  TextLink,
  Ul,
} from '@/components/PortableComponent';

export const components: PortableTextComponents = {
  types: {
    gallery: ImagesArray,
    youtube: YouTube,
    image: ImageComponent,
  },
  marks: {
    nw: NowRap,
    color: ColorText,
    link: TextLink,
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
          my: '16px',
          textAlign: 'justify',
        }}
        variant='bodyRegular'>
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  },

  list: {
    bullet: ({ children }) => <Ul>{children}</Ul>,
    number: ({ children }) => <Ol>{children}</Ol>,
  },
};
