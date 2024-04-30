import { Box, styled } from '@mui/material';
import bgImage from '@/assets/images/kyiv-geneva/mainPage/geneva_bg_piano.webp';

export const BgImage = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover;',
});

export const GridBox = styled(Box)(({ theme }) => ({
  paddingTop: 48,
  paddingBottom: 48,
  display: 'grid',
  rowGap: 16,
  columnGap: 16,
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(1, minmax(288px, 336px))',

  [theme.breakpoints.up('md')]: {
    paddingTop: 96,
    paddingBottom: 96,
    rowGap: 24,
    gridTemplateColumns: 'repeat(2, 336px)',
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: 120,
    paddingBottom: 120,
    rowGap: 48,
    columnGap: 56,
    gridTemplateColumns: 'repeat(3, 336px)',
  },
}));
