import { Components, Theme } from '@mui/material/styles';

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: 'inherit',

      '&:hover': {
        color: theme.palette.action.hover,
      },

      '&:focus-visible': {
        color: theme.palette.action.focus,
      },

      '&:active': {
        color: theme.palette.action.active,
      },
    }),
  },
};
