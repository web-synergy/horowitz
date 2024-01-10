import { Components, Theme } from '@mui/material/styles'

declare module '@mui/material/Divider' {
  interface DividerPropsVariantOverrides {
    light: true
  }
}

export const MuiDivider: Components<Theme>['MuiDivider'] = {
  styleOverrides: {
    // root: ({ theme }) => ({}),
  },
  variants: [
    {
      props: { variant: 'light' },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.neutral[20],
      }),
    },
  ],
}
