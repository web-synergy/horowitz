import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',

  [theme.breakpoints.up('md')]: {
    '& div': {
      float: 'right',
      marginLeft: 24,
      width: '50%',
    },
  },

  [theme.breakpoints.up('lg')]: {
    columnCount: 2,
    columnGap: 24,
    paddingTop: '34%',

    '&:before': {
      content: '""',
      display: 'block',
      marginBottom: '-73%',
    },

    '& > *': {
      backfaceVisibility: 'hidden',
    },

    '& div': {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 'calc(50% - 12px)',
    },
  },
}));
