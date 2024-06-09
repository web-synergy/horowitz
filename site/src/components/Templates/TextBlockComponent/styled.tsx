import { styled, Box } from '@mui/material';

interface ColumnProp {
  column: 1 | 2;
  inline?: boolean;
}

export const WithoutImage = styled(Box, {
  shouldForwardProp: (props) => props !== 'column' && props !== 'inline',
})<ColumnProp>(({ theme, column, inline = false }) => ({
  display: inline ? 'inline ' : 'block',
  [theme.breakpoints.up('lg')]: {
    columnCount: column,
    columnGap: 24,
  },
}));

interface WithImageProps {
  imageHeight: number;
  imageWidth: number;
}

export const WithImage = styled(Box, {
  shouldForwardProp: (props) =>
    props !== 'imageHeight' && props !== 'imageWidth' && props !== 'column',
})<WithImageProps & ColumnProp>(
  ({ theme, imageHeight, imageWidth, column }) => ({
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
        width: imageWidth,
        objectFit: 'cover',
        maxHeight: 580,
        objectPosition: 'center top',
      },
    },

    [theme.breakpoints.up('lg')]: {
      columnCount: column,
      columnGap: 24,

      paddingTop: Math.min(imageHeight + 24, 600),

      '&:before': {
        content: '""',
        display: 'block',
        marginBottom: Math.max(-imageHeight - 24, -600),
      },

      '& > *': {
        backfaceVisibility: 'hidden',
      },

      '& img': {
        position: 'absolute',
        top: 0,
        right: 0,
        maxHeight: 600,
        margin: 0,
      },
    },
  })
);
