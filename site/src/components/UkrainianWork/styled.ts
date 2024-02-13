import { Box, styled, List as MuiList, Link as MuiLink } from '@mui/material';
import banner from '@/assets/images/ukr-works.jpg';

export const Banner = styled(Box)(() => ({
  width: '100%',
  height: '40vw',
  maxHeight: '40vh',
  backgroundImage: `linear-gradient(252.35deg, rgba(8, 7, 8, 0.8) 41.6%, rgba(8, 7, 8, 0) 100%), url(${banner})`,
  backgroundPosition: 'left center',
  backgroundSize: 'cover',
}));

export const List = styled(MuiList)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
}));

export const Link = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.primary.main,

  '&:hover, &:focus-visible': {
    color: theme.palette.action.focus,
    backgroundColor: 'transparent',
  },

  '&:active': {
    color: theme.palette.action.active,
    backgroundColor: 'transparent',
  },
}));
