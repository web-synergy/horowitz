import { Stack, StackProps, Typography, TypographyProps, styled } from '@mui/material'

export const StyledStack = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    rowGap: '8px',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    columnGap: '24px',
  },
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.white,
  width: '119px',
  flexShrink: 0,
}))
