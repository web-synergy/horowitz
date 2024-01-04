import { Components, Theme } from '@mui/material/styles';

export const MuiSvgIcon: Components<Theme>['MuiSvgIcon'] = {
  defaultProps: {
    fontSize: 'small',
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.fontSize === 'small' && { fontSize: '1.5rem' }),
      ...(ownerState.fontSize === 'medium' && { fontSize: '2rem' }),
      ...(ownerState.fontSize === 'large' && { fontSize: '2.25rem' }),
    }),
  },
};
