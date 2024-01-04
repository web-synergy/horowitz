declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xl: false;
  }
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 320,
    md: 768,
    lg: 1280,
    xl: false,
  },
};
