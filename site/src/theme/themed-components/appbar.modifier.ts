import { Components, Theme } from '@mui/material/styles';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: 'none',
      color: theme.palette.common.white,
    }),
  },
};
