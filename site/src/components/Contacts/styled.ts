import { Box, BoxProps, Stack, StackProps, styled } from '@mui/material'

export const ContentWrapper = styled(Stack)<StackProps>(({ theme }) => ({
  width: 'fit-content', // по ширині контенту, щоб Divider більше не розтягувався
  rowGap: 24,

  [theme.breakpoints.up('md')]: {
    rowGap: 40,
  },
  [theme.breakpoints.up('lg')]: {
    rowGap: 48,
  },
}))

export const Section = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'block',
  backgroundColor: theme.palette.neutral[90],
  color: theme.palette.neutral[20],
  flexGrow: 1,
}))

export const ContentStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    rowGap: '24px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '18px',
  },
}))
