import { Components, Theme } from '@mui/material/styles'

export const MuiDivider: Components<Theme>['MuiDivider'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.neutral[20],
    }),
  },
}
