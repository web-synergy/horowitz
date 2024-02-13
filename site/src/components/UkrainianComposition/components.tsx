import { PortableTextComponents } from '@portabletext/react';
import { Link, Typography } from '@mui/material';

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => {
      console.log('p elemnt');
      console.log(children);
      return (
        <Typography component={'p'} textAlign={'justify'}>
          {children}
        </Typography>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;

      return (
        <Link variant="linkBlock" href={value?.href} target={target}>
          {children}
        </Link>
      );
    },
  },
};
