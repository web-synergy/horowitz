import { Components, Theme } from '@mui/material/styles';

export const MuiStack: Components<Theme>['MuiStack'] = {
  styleOverrides: {
    root: {
      '& > :not(style)~:not(style)': {
        marginTop: 0,
      },
    },
  },
};
