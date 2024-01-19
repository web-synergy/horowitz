import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    link: true;
    transparent: true;
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
      fontSize: '1.125rem',
      lineHeight: '1.556',
      padding: '12px 32px',
      border: '2px solid',
      minWidth: 226,

      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
        lineHeight: '1.556',
        padding: '14px 32px',
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
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.black,
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
          color: theme.palette.neutral[50],
        },
      }),
    },
    {
      props: { variant: 'secondary' },
      style: ({ theme }) => ({
        paddingRight: '20px',
        paddingLeft: '20px',
        backgroundColor: 'transparent',
        borderColor: theme.palette.primary.main,
        color: 'inherit',

        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.black,
          borderColor: 'transparent',
        },

        '&:focus-visible': {
          borderColor: theme.palette.primary.dark,
          color: 'inherit',
          backgroundColor: 'transparent',
        },

        '&:active': {
          borderColor: theme.palette.primary.light,
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.22) inset',
          color: 'inherit',
          backgroundColor: 'transparent',
        },

        '&:disabled': {
          borderColor: theme.palette.neutral[50],
          backgroundColor: theme.palette.action.disabled,
          color: theme.palette.neutral[50],
        },
      }),
    },
    {
      props: { variant: 'link' },
      style: ({ theme }) => ({
        padding: 0,
        backgroundColor: 'transparent',
        display: 'block',

        color: 'inherit',

        '&:hover': {
          color: theme.palette.primary.main,
          backgroundColor: 'transparent',
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
    {
      props: { variant: 'transparent' },
      style: ({ theme }) => ({
        backgroundColor: 'transparent',
        borderColor: theme.palette.common.black,
        color: theme.palette.common.black,

        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.black,
          borderColor: 'transparent',
        },

        '&:focus-visible': {
          borderColor: theme.palette.primary.dark,
          backgroundColor: 'transparent',
        },

        '&:active': {
          borderColor: theme.palette.primary.light,
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.22) inset',
          color: 'inherit',
          backgroundColor: 'transparent',
        },

        '&:disabled': {
          borderColor: theme.palette.neutral[50],
          backgroundColor: theme.palette.action.disabled,
          color: theme.palette.neutral[50],
        },
      }),
    },
  ],
};
