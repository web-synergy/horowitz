import { Box, BoxProps, Container, styled } from '@mui/material'

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: '72px 0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '96px 0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '120px 0',
  },
}))

export const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    '&.MuiContainer-root': { paddingRight: 0 },
  },
}))

export const Iframe = styled('iframe')(({ theme }) => ({
  // width: '247px',
  height: '185px',
  maxWidth: '100%',

  border: 'none',

  [theme.breakpoints.up('md')]: {
    // width: '332px',
    height: '248px',
  },
  [theme.breakpoints.up('lg')]: {
    // width: '357px',
    height: '304px',
  },
}))
