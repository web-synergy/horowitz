import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      100: string;
      90: string;
      80: string;
      70: string;
      60: string;
      50: string;
      40: string;
      30: string;
      20: string;
      10: string;
    };
  }
  interface PaletteOptions {
    neutral: {
      100: string;
      90: string;
      80: string;
      70: string;
      60: string;
      50: string;
      40: string;
      30: string;
      20: string;
      10: string;
    };
  }
}

export const palette: PaletteOptions = {
  common: {
    black: "#080708",
    white: "#F5F5F5",
  },
  primary: {
    light: "#F9B33F",
    main: "#D9A145",
    dark: "#B0730F",
    contrastText: "#080708",
  },
  secondary: {
    light: "#1125D1",
    main: "#0B2DA3",
  },

  action: {
    hover: "#F9B33F",
    focus: "#D9A145",
    active: "#CB8D2A",
    disabled: "#E0E0E0",
  },
  text: {
    primary: "#080708",
    secondary: "#F5F5F5",
    qoute: "#E19C2A",
  },
  background: {
    default: "#F5F5F5",
    paper: "#F5F5F5",
    banner: "#0D0C06",
  },
  // divider: '#F2F2F2',
  neutral: {
    100: "#050505",
    90: "#141414",
    80: "#292929",
    70: "#525252",
    60: "#666",
    50: "#7A7A7A",
    40: "#999",
    30: "#C2C2C2",
    20: "#E0E0E0",
    10: "#F5F5F5",
  },
};
