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
    root: ({ theme }) => ({
      textTransform: 'none',
      fontSize: '1rem',
      lineHeight: 1.25,

      //ToDo: change to value from layout
      minWidth: 204,

      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
        lineHeight: 1.222,
      },
    }),
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
      style: ({ theme }) => ({
        padding: '14px 32px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.black,
        border: '2px solid',
        borderColor: 'transparent',

        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },

        '&:focus-visible': {
          backgroundColor: theme.palette.action.focus,
          borderColor: theme.palette.primary.main,
        },

        '&:active': {
          backgroundColor: theme.palette.action.active,
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.22) inset',
        },

        '&:disabled': {
          backgroundColor: theme.palette.action.disabled,
          color: theme.palette.neutral[40],
        },
      }),
    },
    {
      props: { variant: 'secondary' },
      style: ({ theme }) => ({
        padding: '15px 32px',
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,

        '&:hover': {},

        '&:focus-visible': {},

        '&:active': {},

        '&:disabled': {},
      }),
    },
  ],
};
