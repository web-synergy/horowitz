import { Box, Stack, StackProps, Typography, TypographyProps, styled } from '@mui/material'

export const Section = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.neutral[20],

  [theme.breakpoints.up('xs')]: {
    padding: '56px 0 56px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '40px 0 40px',
  },
}))

export const DetailsStack = styled(Stack)<StackProps>(() => ({
  flexDirection: 'row',
  columnGap: '16px',
}))

export const StyledStack = styled(Stack)<StackProps>(({ theme }) => ({
  gap: '56px',
  flexWrap: 'wrap',
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.only('md')]: {
    flexDirection: 'row',
  },
}))

export const CopyrightTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    color: theme.palette.neutral[30],
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: 'normal',
  },
}))
