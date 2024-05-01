import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    link: true;
    transparent: true;
    tertiary: true;
    goBack: true;
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
      lineHeight: '1.75',

      border: '2px solid',
      minWidth: 226,
      transition: 'all .3s ease-in', // плавна анімація

      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
        lineHeight: '1.556',
      },

      '&.MuiButton-root': {
        padding: '8px 32px',

        [theme.breakpoints.up('md')]: {
          padding: '14px 32px',
        },
      },
    }),
    startIcon: {
      '& > *:first-of-type': {
        fontSize: '1.5rem',
      },
    },
    endIcon: {
      '& > *:first-of-type': {
        fontSize: '1.5rem',
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
          // backgroundColor: theme.palette.action.disabled,

          backgroundColor: '#dcc092',
          // backgroundColor: theme.palette.neutral[20],
          // borderColor: theme.palette.neutral[40],
          // borderColor: '#dcc092',
          color: theme.palette.neutral[50],
        },
      }),
    },
    {
      props: { variant: 'secondary' },
      style: ({ theme }) => ({
        '&.MuiButton-root': {
          padding: '9px 20px',

          [theme.breakpoints.up('md')]: {
            padding: '15px 20px',
          },
        },
        backgroundColor: 'transparent',
        borderColor: theme.palette.primary.main,
        color: 'inherit',
        borderWidth: 1,

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
        '&.MuiButton-root': {
          padding: 0,
        },

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
        borderWidth: 1,

        '&.MuiButton-root': {
          padding: '9px 20px',

          [theme.breakpoints.up('md')]: {
            padding: '15px 20px',
          },
        },

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
    {
      props: { variant: 'tertiary' },
      style: ({ theme }) => ({
        '&.MuiButton-root': {
          padding: 0,
          paddingBottom: 2,
        },
        minWidth: 0,

        border: 'none',
        fontSize: '1rem',
        lineHeight: 1.5,

        [theme.breakpoints.up('md')]: {
          padding: 0,
          paddingBottom: '4px',
        },

        [theme.breakpoints.up('lg')]: {
          padding: 0,
          fontSize: '1.125rem',
          lineHeight: 1.556,
        },

        color: 'inherit',
        position: 'relative',

        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 1,
          width: '100%',
          backgroundColor: 'transparent',
        },

        '&:hover, &:focus-visible': {
          backgroundColor: 'transparent',

          '&::after': {
            backgroundColor: 'currentColor',
          },
        },

        '&:active': {
          backgroundColor: 'transparent',
          color: theme.palette.neutral[60],
          '&::after': {
            backgroundColor: 'currentColor',
          },
        },
      }),
    },
    {
      props: { variant: 'goBack' },
      style: ({ theme }) => ({
        '&.MuiButton-root': {
          padding: 8,
        },

        border: '1px solid',
        fontSize: '1rem',
        lineHeight: 1.5,
        boxShadow: '0px 4px 4px 0px #00000040',
        [theme.breakpoints.up('lg')]: {
          fontSize: '1.125rem',
          lineHeight: 1.333,
        },

        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
        color: theme.palette.neutral[60],

        '&:hover, &:focus-visible': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.black,
        },

        '&:active': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.black,
          boxShadow: '0px 4px 4px 0px #00000038 inset',
        },
      }),
    },
  ],
};
