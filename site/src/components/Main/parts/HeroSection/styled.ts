import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material'
import { LinkProps } from 'react-router-dom'

export const Video = styled('video')(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

export const HeaderOverlay = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    height: '64px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '102px',
  },
}))

export const Overlay = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 5,
  backgroundColor: 'rgba(0, 0, 0, 0.70);',
  backdropFilter: 'blur(4px)',
}))

export const ContentWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.common.white,
  [theme.breakpoints.up('xs')]: {
    padding: '60px 0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80px 0 165px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '110px 0 120px',
  },
}))

export const SocialMediaBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    marginBottom: '16px',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '80px',
  },
  [theme.breakpoints.up('lg')]: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}))

export const ContentStack = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    rowGap: '16px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '40px',
  },
}))

export const MainTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  lineHeight: 1.25,
  [theme.breakpoints.up('xs')]: {
    fontSize: '2rem',
    maxWidth: '460px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.625rem',
    lineHeight: 1.2,
    maxWidth: '610px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4rem',
    maxWidth: '900px',
  },
}))

export const ButtonsStack = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    gap: '16px',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  [theme.breakpoints.up('md')]: {
    gap: '24px',
  },
}))

export const StyledButton = styled(Button)<ButtonProps & LinkProps>(({ theme }) => ({
  height: '60px',
  [theme.breakpoints.up('xs')]: {
    width: '288px',
  },
  [theme.breakpoints.up('md')]: {
    width: '226px',
  },
}))

export const LogotypesStack = styled(Stack)<StackProps>(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  [theme.breakpoints.up('xs')]: {
    gap: '16px',
  },
  [theme.breakpoints.up('md')]: {
    gap: '24px',
  },
}))
