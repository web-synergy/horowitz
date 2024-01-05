import { Components, Theme } from '@mui/material/styles';

export const MuiLink: Components<Theme>['MuiLink'] = {
  defaultProps: {
    variant: 'bodyRegular',
    underline: 'none',
  },

  styleOverrides: {
    root: ({ theme }) => ({
      display: 'inline-flex',
      gap: 8,
      color: theme.palette.common.black,

      '&:hover': {
        color: theme.palette.primary.main,
      },

      '&:focus-visible': {
        backgroundColor: 'transparent',
      },

      '&:active': {
        backgroundColor: 'transparent',
      },

      '&:disabled': {
        backgroundColor: 'transparent',
      },
    }),
  },
};
