import { createTheme } from '@mui/material';
import { components } from './components';
import { breakpoints } from './breakpoints';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  breakpoints,
  palette,
  components,
  typography,
  mixins: {
    toolbar: {
      minHeight: 64,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 64,
      },
      [`@media (min-width:${breakpoints.values.lg}px)`]: {
        minHeight: 102,
      },
    },
  },
});
