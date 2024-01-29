import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material'
import { LinkProps } from 'react-router-dom'

export const Wrapper = styled(Box)<BoxProps>(({ theme: { breakpoints, palette } }) => ({
  color: palette.common.white,
  [breakpoints.up('xs')]: {
    padding: '72px 0',
  },
  [breakpoints.up('md')]: {
    padding: '80px 0',
  },
  [breakpoints.up('lg')]: {
    padding: '120px 0',
  },
}))

export const MainTitle = styled(Typography)<TypographyProps>(({ theme: { breakpoints } }) => ({
  [breakpoints.up('xs')]: {
    maxWidth: '100%',
    fontSize: '1.5rem',
    lineHeight: 1.33,
  },
  [breakpoints.up('md')]: {
    maxWidth: '530px',
    fontSize: '2.25rem',
    lineHeight: 1.22,
  },
  [breakpoints.up('lg')]: {
    fontSize: '2.625rem',
    lineHeight: 1.19,
  },
}))

export const DescriptionText = styled(Typography)<TypographyProps>(
  ({ theme: { breakpoints } }) => ({
    margin: '32px 0',
    textAlign: 'justify',
    [breakpoints.up('xs')]: {
      width: '100%',
    },
    [breakpoints.up('md')]: {
      width: '548px',
    },
  })
)

export const WatchButton = styled(Button)<ButtonProps & LinkProps>(
  ({ theme: { breakpoints } }) => ({
    height: '60px',
    [breakpoints.up('xs')]: {
      width: '288px',
    },
    [breakpoints.up('md')]: {
      width: '336px',
    },
  })
)
