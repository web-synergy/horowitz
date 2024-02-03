import { Stack, Typography, TypographyProps, styled } from '@mui/material'

export const MainTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '2rem',
  lineHeight: 1.25,
  marginBottom: '48px',

  [theme.breakpoints.up('md')]: {
    fontSize: '2.625rem',
    lineHeight: 1.19,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
    lineHeight: 1.17,
  },
}))

export const TwoGalleryStack = styled(Stack)(({ theme: { breakpoints } }) => ({
  flexDirection: 'row',
  rowGap: '48px',
  columnGap: '48px',
  flexWrap: 'wrap',

  [breakpoints.up('lg')]: {
    columnGap: '100px',
    flexWrap: 'nowrap',
  },
}))
