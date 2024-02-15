import { Box, styled } from '@mui/material';

export const MainBox = styled(Box)(({ theme: { breakpoints } }) => ({
  paddingTop: '48px',
  paddingBottom: '72px',

  [breakpoints.up('md')]: {
    paddingBottom: '96px',
  },
  [breakpoints.up('lg')]: {
    padding: '120px 0',
  },
}));

export const ImgBox = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    float: 'right',
    width: 'calc(50% - 12px)',
    marginLeft: '24px',
  },
}));
