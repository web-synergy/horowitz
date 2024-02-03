import { Box, BoxProps, Stack, styled } from '@mui/material'

export const Wrapper = styled(Box)<BoxProps>(({ theme: { breakpoints } }) => ({
  [breakpoints.up('xs')]: {
    marginBottom: '72px',
  },
  [breakpoints.up('md')]: {
    marginBottom: '96px',
  },
  [breakpoints.up('lg')]: {
    marginBottom: '120px',
  },
}))

export const LogotypesStack = styled(Stack)(({ theme: { breakpoints } }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  flexWrap: 'wrap',
  [breakpoints.up('xs')]: {
    rowGap: '32px',
  },
  [breakpoints.up('md')]: {
    rowGap: '48px',
  },
  [breakpoints.up('lg')]: {
    columnGap: '40px',
    rowGap: '120px',
  },
}))
