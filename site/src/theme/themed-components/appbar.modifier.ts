import { Components, Theme } from '@mui/material/styles';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: 'rgba(8, 7, 8, 0.40)',
      backdropFilter: 'blur(6px)',
      boxShadow: 'none',
      color: theme.palette.common.white,
    }),
  },
};
