import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Stack,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material';
import { ImgHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';

export const Caption = styled(Typography)<TypographyProps>(
  ({ theme: { breakpoints, palette } }) => ({
    color: palette.neutral[60],
    fontSize: '0.5rem',
    lineHeight: 2,
    textAlign: 'justify',
    [breakpoints.up('md')]: {
      fontSize: '0.75rem',
      lineHeight: 1.33,
    },
  })
);

export const StyledButton = styled(Button)<ButtonProps & LinkProps>(
  ({ theme }) => ({
    width: '288px',
    marginTop: '24px',
    textAlign: 'center',

    [theme.breakpoints.up('xs')]: {
      marginLeft: 'calc(50% - 144px)',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      marginLeft: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: '36px',
      right: 0,
    },
  })
);

export const AboutTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'capitalize',
  marginBottom: '24px',

  [theme.breakpoints.up('lg')]: {
    marginBottom: '48px',
  },
}));

export const AboutStack = styled(Stack)(({ theme }) => ({
  maxHeight: '100%',
  flexWrap: 'wrap',
  gap: '8px',
  [theme.breakpoints.up('lg')]: {
    maxHeight: '350px',
    rowGap: '16px',
    columnGap: '24px',
  },
}));

export const MainBox = styled(Box)(() => ({
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
}));

export const BgImage = styled(Box)<BoxProps & ImgHTMLAttributes<string>>(
  () => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  })
);

export const ButtonsListStack = styled(Stack)(({ theme }) => ({
  margin: '48px 0',
  rowGap: '24px',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    margin: '115px 0 105px',
    flexWrap: 'wrap',
    height: '396px',
    columnGap: '68px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '160px 0',
    height: '277px',
    columnGap: '56px',
    rowGap: '48px',
  },
}));

export const ContentStack = styled(Stack)(({ theme }) => ({
  gap: '24px',
  flexWrap: 'wrap',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('lg')]: {
    width: 'calc(50% - 12px)',
  },
}));
