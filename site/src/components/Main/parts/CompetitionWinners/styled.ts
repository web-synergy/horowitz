import { Box, BoxProps, Stack, Typography, TypographyProps, styled } from '@mui/material'

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: '72px 0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '96px 0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '120px 0',
  },
}))

export const MainTitle = styled(Typography)<TypographyProps>(({ theme, variant }) => ({
  ...(variant === 'h1' && {
    [theme.breakpoints.only('md')]: {
      fontSize: '36px',
    },
  }),
}))

export const WinnersCardsStack = styled(Stack)(({ theme: { breakpoints } }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [breakpoints.up('xs')]: {
    gap: '32px',
    marginTop: '32px',
  },
  [breakpoints.up('md')]: {
    gap: '24px',
    marginTop: '24px',
  },
  [breakpoints.up('lg')]: {
    rowGap: '48px',
    columnGap: '24px',
    marginTop: '48px',
  },
}))
