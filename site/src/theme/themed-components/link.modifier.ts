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
      color: 'inherit',
      alignItems: 'center',
      position: 'relative',
      paddingBottom: '2px',
      cursor: 'pointer',

      '&:hover, &:focus-visible': {
        color: theme.palette.action.focus,
        backgroundColor: 'transparent',
      },

      '&:active': {
        backgroundColor: 'transparent',
        color: theme.palette.action.active,
      },
    }),
  },
  variants: [
    {
      props: { variant: 'linkBlock' },
      style: ({ theme }) => ({
        color: theme.palette.secondary.main,
        cursor: 'pointer',
        position: 'relative',

        '&:hover, &:focus-visible': {
          color: theme.palette.secondary.light,
          backgroundColor: 'transparent',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 1,
            width: '100%',
            backgroundColor: theme.palette.secondary.light,
          },
        },

        '&:active': {
          backgroundColor: 'transparent',
        },

        '&:disabled': {
          backgroundColor: 'transparent',
        },
      }),
    },
  ],
};
