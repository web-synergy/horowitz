import { Box, styled } from '@mui/material'

export const MainBox = styled(Box)(({ theme: { breakpoints } }) => ({
  marginTop: '48px',
  marginBottom: '72px',

  [breakpoints.up('md')]: {
    marginBottom: '96px',
  },
  [breakpoints.up('lg')]: {
    margin: '120px 0',
  },
}))

export const ImgBox = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    float: 'right',
    width: 'calc(50% - 12px)',
    marginLeft: '24px',
  },
}))
