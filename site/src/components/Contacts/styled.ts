import { Box, BoxProps, Divider, DividerProps, Stack, StackProps, styled } from '@mui/material'

export const MainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    margin: '40px 0',
  },
  [theme.breakpoints.up('md')]: {
    margin: '48px 0 36px 0',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '56px 0 68px 0',
  },
}))

export const ContentWrapper = styled(Stack)<StackProps>(({ theme }) => ({
  width: 'fit-content', // по ширині контенту, щоб Divider більше не розтягувався
  [theme.breakpoints.up('xs')]: {
    rowGap: '40px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '48px',
  },
}))

export const DescBox = styled(Box)<BoxProps>(() => ({
  width: '119px',
  flexShrink: 0,
}))

export const InfoDivider = styled(Divider)<DividerProps>(() => ({
  marginTop: '24px',
}))

export const Section = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.neutral[90],
  color: theme.palette.neutral[20],
  flexGrow: 1,
}))
