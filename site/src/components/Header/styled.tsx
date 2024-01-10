import { styled, FormControlLabelProps, FormControlLabel } from '@mui/material';

export const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

export const StyledFormControlLabel = styled(
  (props: StyledFormControlLabelProps) => <FormControlLabel {...props} />
)(({ theme, checked }) => ({
  margin: 0,
  '.MuiTypography-root': {
    textTransform: 'uppercase;',
    color: 'rgba(186, 186, 186, 0.3)',
  },

  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.text.secondary,
  },
}));
