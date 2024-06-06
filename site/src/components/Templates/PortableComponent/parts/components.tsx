import { PortableTextComponents } from '@portabletext/react';
import { ImageComponent, ImagesArray } from './ImageComponent';
import { Typography } from '@mui/material';

import YouTube from './YouTube';
import {
  Blockquote,
  ColorText,
  NowRap,
  Ol,
  TextLink,
  Ul,
  Bold,
} from '@/components/Templates/PortableComponent/parts';

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
    strong: Bold,
  },
  block: {
    h2: ({ children }) => (
      <Typography
        component={'h2'}
        sx={{
          my: { xs: 3, md: 5, lg: 6 },
        }}
        variant="h2Block"
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        component={'h3'}
        sx={{
          my: { xs: 3, md: 5, lg: 6 },
        }}
        variant="h3"
      >
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography
        component={'h4'}
        sx={{
          my: { xs: 3, md: 5, lg: 6 },
        }}
        variant="h3Block"
      >
        {children}
      </Typography>
    ),
    normal: ({ children }) => (
      <Typography
        component={'p'}
        sx={{
          mb: 1,
          textAlign: 'justify',
          '&:last-child': {
            mb: 0,
          },
        }}
        variant="bodyRegular"
      >
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
    topSpace: ({ children }) => (
      <Typography
        component={'p'}
        sx={{
          mt: { xs: 3, md: 5, lg: 6 },
          mb: 1,
          textAlign: 'justify',
          '&:last-child': {
            mb: 0,
          },
        }}
        variant="bodyRegular"
      >
        {children}
      </Typography>
    ),
  },

  list: {
    bullet: ({ children }) => <Ul>{children}</Ul>,
    number: ({ children }) => <Ol>{children}</Ol>,
  },
};
