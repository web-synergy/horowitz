import { Components, Theme } from '@mui/material/styles';

export const MuiContainer: Components<Theme>['MuiContainer'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      maxWidth: 1280,
      [theme.breakpoints.up('xs')]: {
        //settings for tablet container: 0px - 767px
        minWidth: 320,
      },

      [theme.breakpoints.up('md')]: {
        //settings for tablet container: 768px - 1279px
      },

      [theme.breakpoints.up('lg')]: {
        //settings for desktop container: 1280px+
        maxWidth: 1280,
        margin: '0 auto',
      },
    }),
  },
};
