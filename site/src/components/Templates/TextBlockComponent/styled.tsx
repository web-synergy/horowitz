import { styled, Box, Typography } from '@mui/material';

export const WithoutImage = styled(Box)(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.up('lg')]: {
    columnCount: 2,
    columnGap: 24,
  },
}));

interface WithImageProps {
  imageHeight: number;
  imageWidth: number;
}

export const WithImage = styled(Box, {
  shouldForwardProp: (props) =>
    props !== 'imageHeight' && props !== 'imageWidth',
})<WithImageProps>(({ theme, imageHeight, imageWidth }) => ({
  width: '100%',
  position: 'relative',

  '& img': {
    width: 'auto',
    height: imageHeight,
    maxHeight: 296,
    display: 'block',
    margin: '0 auto',
    marginBottom: 24,
  },

  [theme.breakpoints.up('md')]: {
    '& img': {
      float: 'right',
      marginLeft: 24,
      marginBottom: 8,
      maxWidth: 'unset',
      maxHeight: 'unset',
      width: imageWidth,
      objectFit: 'cover',
      objectPosition: 'center top',
    },
  },

  [theme.breakpoints.up('lg')]: {
    columnCount: 2,
    columnGap: 24,

    paddingTop: imageHeight < imageWidth ? '29%' : '46%',

    '&:before': {
      content: '""',
      display: 'block',
      marginBottom: imageHeight < imageWidth ? '-60%' : '-95%',
    },

    '& > *': {
      backfaceVisibility: 'hidden',
    },

    '& img': {
      position: 'absolute',
      top: 0,
      right: 0,
      maxHeight: 500,

      margin: 0,
    },
  },
}));

export const TextBlock = styled(Typography)(() => ({
  textAlign: 'justify',
  display: 'block',

  '&:not(:last-of-type)': {
    marginBottom: 16,
  },
}));
