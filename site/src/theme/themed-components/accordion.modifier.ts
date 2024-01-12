import { Components, Theme } from '@mui/material/styles';

export const MuiAccordion: Components<Theme>['MuiAccordion'] = {
  defaultProps: {
    disableGutters: true,
  },
  styleOverrides: {
    // root,
  },
};

export const MuiAccordionSummary: Components<Theme>['MuiAccordionSummary'] = {
  defaultProps: { disableRipple: true, disableTouchRipple: true },
  styleOverrides: {
    content: {
      marginTop: 0,
      marginBottom: 0,
    },
    root: {
      minHeight: 0,
      maxWidth: 'max-content',
    },
    expandIconWrapper: {
      color: 'inherit',
    },
  },
};
