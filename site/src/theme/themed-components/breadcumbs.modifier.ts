import { Components, Theme } from '@mui/material/styles';

export const MuiBreadcrumbs: Components<Theme>['MuiBreadcrumbs'] = {
  styleOverrides: {
    separator: {
      margin: '0 12px',
    },
  },
};
