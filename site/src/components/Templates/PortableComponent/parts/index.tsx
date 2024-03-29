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

export const Ul = ({ children }: { children: ReactNode }) => {
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
        gap: '8px',
        flexDirection: 'column',
        my: '16px',
        pl: { xs: '24px', md: '32px' },
        lineHeight: { sx: '24px', md: '28px' },
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
      component={'blockquote'}
      sx={{
        display: 'block',
        pl: '16px',
        borderLeft: 'solid 2px #141414',
        my: '16px',
      }}
      variant="blockquote"
    >
      {children}
    </Typography>
  );
};
