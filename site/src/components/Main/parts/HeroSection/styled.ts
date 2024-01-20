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

export const Overlay = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 5,
  backgroundColor: 'rgba(0, 0, 0, 0.70);',
}))
export const ContentWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.common.white,
  [theme.breakpoints.up('xs')]: {
    padding: '60px 0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '96px 0 128px',
  },
}))

export const SocialMediaBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}))

export const ContentStack = styled(Stack)<StackProps>(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('xs')]: {
    rowGap: '24px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    rowGap: '48px',
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
  [theme.breakpoints.up('xs')]: {
    width: '288px',
  },
  [theme.breakpoints.up('md')]: {
    width: '266px',
  },
}))

export const CardTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 400,
  fontStyle: 'normal',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.375rem',
    lineHeight: 1.36,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
    lineHeight: 1.333,
  },
}))
