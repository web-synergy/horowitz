import { Box, Button, ButtonProps, Typography, TypographyProps, styled } from '@mui/material'
import { LinkProps } from 'react-router-dom'

export const BannerBox = styled(Box)(({ theme: { breakpoints } }) => ({
  position: 'relative',
  maxHeight: '544px',
  overflow: 'hidden',
  paddingBottom: 'calc(38.5% - 32px)',
  [breakpoints.up('md')]: {
    paddingBottom: 'calc(43.5% - 48px)',
  },
  [breakpoints.up('lg')]: {
    paddingBottom: 'calc(42.5% - 48px)',
  },
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    backgroundColor: '#080708B2',
  },
}))

export const Caption = styled(Typography)<TypographyProps>(
  ({ theme: { breakpoints, palette } }) => ({
    color: palette.neutral[60],
    fontSize: '0.5rem',
    lineHeight: 2,
    marginTop: '8px',
    [breakpoints.up('md')]: {
      fontSize: '0.75rem',
      lineHeight: 1.33,
    },
  })
)

export const StyledButton = styled(Button)<ButtonProps & LinkProps>(({ theme }) => ({
  width: '288px',
  border: `1px solid ${theme.palette.common.black}`,
  marginTop: '24px',
  textAlign: 'center',

  [theme.breakpoints.up('xs')]: {
    marginLeft: 'calc(50% - 144px)',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    marginLeft: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
}))
