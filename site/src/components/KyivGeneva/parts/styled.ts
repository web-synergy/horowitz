import { Box, styled } from '@mui/material'

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
