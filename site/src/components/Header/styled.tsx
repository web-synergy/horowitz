import {
  styled,
  FormControlLabelProps,
  FormControlLabel,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link as MuiLink,
  LinkProps,
  Theme,
} from '@mui/material';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

export const StyledFormControlLabel = styled(
  (props: StyledFormControlLabelProps) => <FormControlLabel {...props} />
)(({ theme, checked }) => ({
  margin: 0,
  '.MuiTypography-root': {
    textTransform: 'uppercase;',
    color: theme.palette.neutral[50],
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.2222,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.action.hover,
    },
  },

  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.text.secondary,
  },
}));

export const LangDivider = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: 2,
  height: 17,
  verticalAlign: 'middle',
  margin: 'auto 4px',
}));

const navLinkStyle = (theme: Theme) => ({
  padding: '8px 0',
  '&:hover': {
    color: theme.palette.primary.main,
  },
});

interface CustomProp {
  isActive: boolean;
}

export const Link = styled(MuiLink, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<LinkProps & RouterLinkProps & CustomProp>(({ theme, isActive }) => ({
  ...navLinkStyle(theme),
  color: isActive ? theme.palette.primary.main : 'inherit',
  '&': {
    paddingBottom: 8,
  },

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const NavList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
  },
}));

export const NavItem = styled(Accordion)(() => ({
  background: 'transparent',
  color: 'inherit',
  border: 'none',
  boxShadow: 'none',
  position: 'relative',

  '&::before': {
    display: 'none',
  },
}));

export const NavButton = styled(AccordionSummary, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<CustomProp>(({ theme, isActive }) => ({
  ...navLinkStyle(theme),

  gap: 16,
  color: isActive ? theme.palette.primary.main : 'inherit',

  '&[aria-expanded="true"]': {
    color: theme.palette.action.focus,
  },

  [theme.breakpoints.up('lg')]: {
    gap: 4,
  },
}));

export const SubMenuList = styled(AccordionDetails)(({ theme }) => ({
  padding: '24px 32px 0',
  color: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  borderRadius: 0,

  [theme.breakpoints.up('lg')]: {
    padding: '12px',
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    gap: 16,
  },
}));

export const SubmenuLink = styled(MuiLink, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<LinkProps & RouterLinkProps & CustomProp>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main : 'inherit',
  '&': {
    paddingBottom: 0,
  },

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
