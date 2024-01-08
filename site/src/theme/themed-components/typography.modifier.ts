import { Components, Theme } from '@mui/material/styles'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    h1: true
    h2: true
    h3: true
    subhead: true
    bodyMedium: true
    bodyRegular: true
    bodyLight: true
    caption: true
    smallText: true
  }
}
export const MuiTypography: Components<Theme>['MuiTypography'] = {
  defaultProps: {
    variant: 'bodyRegular',
    fontFamily: 'Pragmatica',
  },

  variants: [
    {
      props: { variant: 'title' },
      style: ({ theme }) => ({
        fontSize: '2.5rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.1,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '3rem',
          lineHeight: 1.083,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '3.25rem',
          lineHeight: 1.077,
        },
      }),
    },
    {
      props: { variant: 'h1' },
      style: ({ theme }) => ({
        fontSize: '2.25rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.111,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '2.625rem',
          lineHeight: 1.143,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '3rem',
          lineHeight: 1.083,
        },
      }),
    },
    {
      props: { variant: 'h2' },
      style: ({ theme }) => ({
        fontSize: '2rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.125,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '2.25rem',
          lineHeight: 1.111,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '2.625rem',
          lineHeight: 1.143,
        },
      }),
    },
    {
      props: { variant: 'h3' },
      style: ({ theme }) => ({
        fontSize: '1.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.143,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
          lineHeight: 1.125,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '2.25rem',
          lineHeight: 1.111,
        },
      }),
    },
    {
      props: { variant: 'subhead' },
      style: ({ theme }) => ({
        fontSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.2,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1.375rem',
          lineHeight: 1.182,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '1.5rem',
          lineHeight: 1.167,
        },
      }),
    },
    {
      props: { variant: 'bodyMedium' },
      style: ({ theme }) => ({
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 1.25,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1.125rem',
          lineHeight: 1.222,
        },
      }),
    },
    {
      props: { variant: 'bodyRegular' },
      style: ({ theme }) => ({
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.25,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1.125rem',
          lineHeight: 1.222,
        },
      }),
    },
    {
      props: { variant: 'bodyLight' },
      style: ({ theme }) => ({
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: 1.25,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1.125rem',
          lineHeight: 1.222,
        },
      }),
    },
    {
      props: { variant: 'caption' },
      style: ({ theme }) => ({
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.286,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1rem',
          lineHeight: 1.25,
        },
      }),
    },
    {
      props: { variant: 'smallText' },
      style: ({ theme }) => ({
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.333,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '0.875rem',
          lineHeight: 1.286,
        },
      }),
    },
  ],
}
