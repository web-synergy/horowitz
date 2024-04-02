import { Box, BoxProps, Stack, styled } from '@mui/material'
import { ImgHTMLAttributes } from 'react'

// ========== NavList ==========
export const LinksListStack = styled(Stack)(({ theme }) => ({
  maxHeight: '100%',
  rowGap: '24px',
  alignItems: 'center',
  alignContent: 'center', // центрує лінки відносно контейнера

  [theme.breakpoints.up('md')]: {
    flexWrap: 'wrap',
    columnGap: '68px',
  },
  [theme.breakpoints.up('lg')]: {
    columnGap: '56px',
    rowGap: '48px',
  },
}))
// ========== NavList ==========

// ========== NavListWrapper ==========
export const MainBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  padding: '48px 0',
  [theme.breakpoints.up('md')]: {
    padding: '96px 0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '120px 0',
  },
}))

export const BgImage = styled(Box)<BoxProps & ImgHTMLAttributes<string>>(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))
// ========== NavListWrapper ==========
