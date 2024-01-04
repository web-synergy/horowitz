import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}
export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'primary',
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: () => ({}),
    startIcon: {
      '& > *:first-of-type': {
        // fontSize: '1.5rem',
      },
    },
    endIcon: {
      '& > *:first-of-type': {
        // fontSize: '1.5rem',
      },
    },
  },
  variants: [
    {
      props: { variant: 'primary' },
      style: () => ({
        '&:hover': {},

        '&:focus': {},

        '&:active': {},

        '&:disabled': {},
      }),
    },
  ],
};
