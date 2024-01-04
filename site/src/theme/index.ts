import { createTheme } from '@mui/material';
import { components } from './components';
import { breakpoints } from './breakpoints';
import { palette } from './palette';
import { typography } from './typography';

declare module '@mui/material/styles' {
  interface Theme {
    header: {
      mobile: { minHeight: number };
      desktop: { minHeight: number };
    };
  }
  interface ThemeOptions {
    header: {
      mobile: { minHeight: number };
      desktop: { minHeight: number };
    };
  }
}

export const theme = createTheme({
  breakpoints,
  palette,
  components,
  typography,
  header: {
    mobile: { minHeight: 102 },
    desktop: {
      minHeight: 102,
    },
  },
});
