import { Box, BoxProps, Container, Typography, TypographyProps, styled } from '@mui/material'

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

// export const MainTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
//   [theme.breakpoints.up('xs')]: {
//     fontSize: '1.75rem',
//     lineHeight: 1.28,
//     marginBottom: '24px',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.25rem',
//     lineHeight: 1.22,
//     marginBottom: '40px',
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: '3rem',
//     lineHeight: 1.16,
//     marginBottom: '48px',
//   },
// }))

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
