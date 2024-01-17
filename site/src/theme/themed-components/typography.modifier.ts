import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    h1: true;
    h2: true;
    h3: true;
    subhead: true;
    bodyMedium: true;
    bodyRegular: true;
    bodyLight: true;
    caption: true;
    smallText: true;
    navLink: true;
    h2Block: true;
    h3Block: true;
    h4Block: true;
    quote: true;
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
        lineHeight: 1.2,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '3rem',
          lineHeight: 1.167,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '3.25rem',
          lineHeight: 1.154,
        },
      }),
    },
    {
      props: { variant: 'h1' },
      style: ({ theme }) => ({
        fontSize: '2rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.25,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '2.625rem',
          lineHeight: 1.19,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '3rem',
          lineHeight: 1.167,
        },
      }),
    },
    {
      props: { variant: 'h2' },
      style: ({ theme }) => ({
        fontSize: '1.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.286,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '2.25rem',
          lineHeight: 1.222,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '2.625rem',
          lineHeight: 1.19,
        },
      }),
    },
    {
      props: { variant: 'h3' },
      style: ({ theme }) => ({
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.333,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
          lineHeight: 1.25,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '2.25rem',
          lineHeight: 1.222,
        },
      }),
    },
    {
      props: { variant: 'subhead' },
      style: ({ theme }) => ({
        fontSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.4,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1.375rem',
          lineHeight: 1.364,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '1.5rem',
          lineHeight: 1.333,
        },
      }),
    },
    {
      props: { variant: 'bodyMedium' },
      style: ({ theme }) => ({
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 1.5,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1.125rem',
          lineHeight: 1.556,
        },
      }),
    },
    {
      props: { variant: 'bodyRegular' },
      style: ({ theme }) => ({
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.5,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1.125rem',
          lineHeight: 1.556,
        },
      }),
    },
    {
      props: { variant: 'bodyLight' },
      style: ({ theme }) => ({
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: 1.5,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1.125rem',
          lineHeight: 1.556,
        },
      }),
    },
    {
      props: { variant: 'caption' },
      style: ({ theme }) => ({
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.572,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1rem',
          lineHeight: 1.5,
        },
      }),
    },
    {
      props: { variant: 'smallText' },
      style: ({ theme }) => ({
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.667,
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '0.875rem',
          lineHeight: 1.571,
        },
      }),
    },
    {
      props: { variant: 'navLink' },
      style: ({ theme }) => ({
        fontSize: '1.25rem',
        lineHeight: 1.4,
        fontWeight: 400,
        fontStyle: 'normal',
        fontVariantNumeric: 'lining-nums proportional-nums',

        [theme.breakpoints.up('md')]: {
          fontSize: '1.375rem',
          lineHeight: 1.364,
        },

        [theme.breakpoints.up('lg')]: {
          fontSize: '1.125rem',
          lineHeight: 1.555,
        },
      }),
    },
    {
      props: {
        variant: 'h2Block',
      },
      style: ({ theme }) => ({
        fonSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.333,

        [theme.breakpoints.up('md')]: {
          fontSize: '1.75rem',
          lineHeight: 1.286,
        },

        [theme.breakpoints.up('lg')]: {
          fonSize: '2rem',
          lineHeight: 1.25,
        },
      }),
    },
    {
      props: {
        variant: 'h3Block',
      },
      style: ({ theme }) => ({
        fonSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.4,

        [theme.breakpoints.up('md')]: {
          fontSize: '1.5rem',
          lineHeight: 1.333,
        },

        [theme.breakpoints.up('lg')]: {
          fonSize: '1.75rem',
          lineHeight: 1.286,
        },
      }),
    },
    {
      props: {
        variant: 'h4Block',
      },
      style: ({ theme }) => ({
        fonSize: '1.125rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1.444,

        [theme.breakpoints.up('md')]: {
          fontSize: '1.25rem',
          lineHeight: 1.4,
        },

        [theme.breakpoints.up('lg')]: {
          fonSize: '1.5rem',
          lineHeight: 1.333,
        },
      }),
    },
    {
      props: {
        variant: 'quote',
      },
      style: ({ theme }) => ({
        fonSize: '1.125rem',
        fontStyle: 'italic',
        fontWeight: 400,
        lineHeight: 1.444,

        [theme.breakpoints.up('md')]: {
          fontSize: '1.25rem',
          lineHeight: 1.6,
        },
      }),
    },
  ],
};
