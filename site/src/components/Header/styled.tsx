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

export const Link = styled(MuiLink)<LinkProps & RouterLinkProps>(
  ({ theme }) => ({
    ...navLinkStyle(theme),
    '&': {
      paddingBottom: 8,
    },

    '&:hover': {
      color: theme.palette.primary.main,
      '&::after': {
        width: 0,
        height: 0,
      },
    },
  })
);

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

export const NavButton = styled(AccordionSummary)(({ theme }) => ({
  ...navLinkStyle(theme),

  gap: 16,

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
    gap: 10,
  },
}));

export const SubmenuLink = styled(MuiLink)<LinkProps | RouterLinkProps>(
  ({ theme }) => ({
    '&': {
      paddingBottom: 0,
    },

    '&:hover': {
      color: theme.palette.primary.main,

      '&::after': {
        width: 0,
        height: 0,
      },
    },
  })
);
