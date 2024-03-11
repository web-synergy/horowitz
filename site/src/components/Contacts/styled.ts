import { Stack, StackProps, styled } from '@mui/material'

export const ContentWrapper = styled(Stack)<StackProps>(({ theme }) => ({
  width: 'fit-content', // по ширині контенту, щоб Divider більше не розтягувався
  [theme.breakpoints.up('xs')]: {
    rowGap: '40px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '48px',
  },
}))

export const ContentStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    rowGap: '24px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '18px',
  },
}))
