import { PortableTextComponents } from '@portabletext/react';
import { Typography } from '@mui/material';
import { Link } from './styled';

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography component={'p'} textAlign={'justify'}>
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
        <Link href={value?.href} target={target}>
          {children}
        </Link>
      );
    },
  },
};
