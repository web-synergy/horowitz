import { styled, List as MuiList, Link as MuiLink } from '@mui/material';

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
