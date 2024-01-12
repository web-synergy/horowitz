import { Components, Theme } from '@mui/material/styles';

export const MuiList: Components<Theme>['MuiList'] = {
  defaultProps: {
    disablePadding: true,
  },
};

export const MuiListItem: Components<Theme>['MuiListItem'] = {
  defaultProps: {
    disableGutters: true,
    disablePadding: true,
  },
};

export const MuiListItemButton: Components<Theme>['MuiListItemButton'] = {
  defaultProps: {
    disableTouchRipple: true,
    disableRipple: true,
    disableGutters: true,
  },

  styleOverrides: {
    root: {},
  },
};
