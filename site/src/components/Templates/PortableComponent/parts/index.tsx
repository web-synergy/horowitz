import { Link, Typography } from '@mui/material';
import { PortableTextMarkComponentProps } from '@portabletext/react';
import { FC, ReactNode } from 'react';

import { Link as RouterLink } from 'react-router-dom';

export const TextLink: FC<PortableTextMarkComponentProps> = ({
  value,
  children,
}) => {
  const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
  return (
    <Link
      component={RouterLink}
      variant="linkBlock"
      to={value?.href}
      target={target}
    >
      {children}
    </Link>
  );
};

export const ColorText: FC<PortableTextMarkComponentProps> = ({
  value,
  children,
}) => {
  return <span style={{ color: value?.color?.hex }}>{children}</span>;
};

export const NowRap: FC<PortableTextMarkComponentProps> = ({ children }) => {
  return <span style={{ textWrap: 'nowrap' }}>{children}</span>;
};

export const Bold: FC<PortableTextMarkComponentProps> = ({ children }) => {
  return (
    <Typography variant="bodyMedium" component={'span'}>
      {children}
    </Typography>
  );
};

export const Ul = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      component={'ul'}
      sx={{
        display: 'flex',

        flexDirection: 'column',
        my: 2,
        pl: { xs: 3, md: 4 },
        textAlign: 'justify',
      }}
      variant="bodyRegular"
    >
      {children}
    </Typography>
  );
};

export const Ol = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      component={'ol'}
      sx={{
        display: 'flex',

        flexDirection: 'column',
        textAlign: 'justify',
        my: 2,
        pl: { xs: 3, md: 4 },
      }}
      variant="bodyRegular"
    >
      {children}
    </Typography>
  );
};

export const Blockquote = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      variant="quote"
      component={'blockquote'}
      sx={{
        display: 'block',
        pl: 3,
        borderLeft: 'solid 2px',
        my: 2,
      }}
    >
      {children}
    </Typography>
  );
};
