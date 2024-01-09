import {
  Divider,
  DividerProps,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material'

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

export const MainTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 400,
  lineHeight: 1.14,
  [theme.breakpoints.up('xs')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.625rem',
  },
}))

export const SubTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.875rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
  },
}))

export const RegularText = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
  },
}))

export const BoldText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500,
  width: '113px',
  flexShrink: 0,
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
  },
}))

export const InfoDivider = styled(Divider)<DividerProps>(() => ({
  marginTop: '24px',
}))
