import { styled, Tabs, Tab } from '@mui/material';

export const GroupTabs = styled(Tabs)(({ theme }) => ({
  color: theme.palette.common.black,

  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
}));

export const GroupTab = styled(Tab)(({ theme }) => ({
  //   maxWidth: 'unset',
  textTransform: 'none',
  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  borderRadius: '4px',
  color: theme.palette.common.black,

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  '&.Mui-selected': {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },

  '&:last-child': {
    marginTop: 24,
  },

  [theme.breakpoints.up('md')]: {
    '&:last-child': {
      marginLeft: 24,
      marginTop: 0,
    },
  },

  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
  },
}));
