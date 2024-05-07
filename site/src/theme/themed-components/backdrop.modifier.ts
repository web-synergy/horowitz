import { Components, Theme } from '@mui/material/styles';

export const MuiBackdrop: Components<Theme>['MuiBackdrop'] = {
  styleOverrides: {
    root: () => ({
      backgroundColor: ' rgba(8, 7, 8, 0.6)',
    }),
  },
};
