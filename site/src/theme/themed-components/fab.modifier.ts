import { Components, Theme } from '@mui/material/styles';

export const MuiFab: Components<Theme>['MuiFab'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      height: 48,
      width: 48,
      backgroundColor: theme.palette.background.default,
      border: '1px solid',
      borderColor: theme.palette.common.black,
      boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',

      // [theme.breakpoints.up('lg')]: {
      //   height: 75,
      //   width: 75,
      // },
      ':hover': {
        backgroundColor: theme.palette.background.default,
      },
      // для того, щоб ховер не перемальовував кнопку на тач пристроях
      '@media (hover: hover)': {
        ':hover': {
          backgroundColor: theme.palette.primary.light,
        },
      },
      '@media (hover: none)': {
        ':active': {
          backgroundColor: theme.palette.primary.light,
        },
      },
    }),
  },
};
