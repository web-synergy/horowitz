import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    gray: {
      main: string;
      dark: string;
      light: string;
    };
  }
  interface PaletteOptions {
    gray: {
      main: string;
      dark: string;
      light: string;
    };
  }
}

export const palette: PaletteOptions = {
  common: {
    black: '#000000',
    white: '#F2F2F2',
  },
  primary: {
    main: '#D9A145',
    contrastText: '#000000',
  },

  secondary: {
    main: '#F2F2F2',
    contrastText: '#000000',
  },
  text: {
    primary: '#131333',
    secondary: '#F5F5F5',
  },
  background: {
    default: '#F5F5F5',
    paper: '#F5F5F5',
  },
  // divider: '#F2F2F2',
  gray: {
    light: 'rgba(255, 255, 255, 0.30)',
    main: 'rgba(0,0,0,0.5)',
    dark: '#000000',
  },
};
