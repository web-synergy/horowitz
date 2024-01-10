import { Box, BoxProps, Divider, DividerProps, Stack, StackProps, styled } from '@mui/material'

export const ContentWrapper = styled(Stack)<StackProps>(({ theme }) => ({
  width: 'fit-content', // по ширині контенту, щоб Divider більше не розтягувався
  [theme.breakpoints.up('xs')]: {
    margin: '40px 0 72px',
    rowGap: '40px',
  },
  [theme.breakpoints.up('md')]: {
    margin: '48px 89px 96px',
    rowGap: '48px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '56px 0 128px 96px',
  },
}))

export const DescBox = styled(Box)<BoxProps>(() => ({
  width: '113px',
  flexShrink: 0,
}))

export const InfoDivider = styled(Divider)<DividerProps>(() => ({
  marginTop: '24px',
}))
