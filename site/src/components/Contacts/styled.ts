import {
  Box,
  BoxProps,
  Divider,
  DividerProps,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material'

export const ContentWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    margin: '56px 0 0 96px',
  },
}))

export const MainTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 400,
  lineHeight: 1.14,
  [theme.breakpoints.up('md')]: {
    fontSize: '2.625rem',
    marginBottom: '40px',
  },
}))

export const RegularText = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
  },
}))

export const BoldText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
  },
}))

export const InfoDivider = styled(Divider)<DividerProps>(() => ({
  marginTop: '24px',
}))
