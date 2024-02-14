import { Typography } from '@mui/material';
import { PortableTextComponents } from '@portabletext/react';

export const PortableVirtuosos: PortableTextComponents = {
  block: {
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
  },
};
