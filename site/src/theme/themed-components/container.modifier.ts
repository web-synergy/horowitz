import { Components, Theme } from '@mui/material/styles';

export const MuiContainer: Components<Theme>['MuiContainer'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      maxWidth: 1280,
      [theme.breakpoints.up('xs')]: {
        padding: '0 16px',

        //settings for tablet container: 0px - 767px
        minWidth: 320,
        paddingLeft: 16,
        paddingRight: 16,
      },

      [theme.breakpoints.up('md')]: {
        //settings for tablet container: 768px - 1279px
        paddingLeft: 40,
        paddingRight: 40,
      },

      [theme.breakpoints.up('lg')]: {
        //settings for desktop container: 1280px+
        padding: '0 80px',
        maxWidth: 1280,
        margin: '0 auto',
        paddingLeft: 80,
        paddingRight: 80,
      },
    }),
  },
};
