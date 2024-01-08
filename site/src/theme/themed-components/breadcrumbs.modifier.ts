import { Components, Theme } from '@mui/material/styles'

export const MuiBreadcrumbs: Components<Theme>['MuiBreadcrumbs'] = {
  styleOverrides: {
    separator: {
      margin: '0 12px',
    },
    root: ({ theme }) => ({
      lineHeight: 1.22,
      [theme.breakpoints.up('xs')]: {},
      [theme.breakpoints.up('md')]: {
        marginTop: '48px',
      },
    }),
  },
}
