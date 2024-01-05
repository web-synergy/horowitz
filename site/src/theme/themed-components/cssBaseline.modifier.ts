import { Components, Theme } from '@mui/material/styles';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: (theme) => ({
    body: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      lineHeight: 1,
    },
  }),
};
