import {
  styled,
  FormControlLabelProps,
  FormControlLabel,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

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

export const navLinkStyle = {
  padding: '8px 0',
};

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
  ...navLinkStyle,

  gap: 16,

  [theme.breakpoints.up('lg')]: {
    gap: 4,
  },
}));

export const SubMenuList = styled(AccordionDetails)(({ theme }) => ({
  padding: '24px 32px 0',

  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  [theme.breakpoints.up('lg')]: {
    padding: '24px 16px',
  },
}));
