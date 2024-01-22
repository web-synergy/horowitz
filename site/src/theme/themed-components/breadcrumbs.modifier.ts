import { Components, Theme } from "@mui/material/styles";

export const MuiBreadcrumbs: Components<Theme>["MuiBreadcrumbs"] = {
  styleOverrides: {
    separator: {
      margin: "0 12px",
    },
    root: ({ theme }) => ({
      [theme.breakpoints.up("xs")]: {
        marginTop: "32px",
        ".MuiTypography-root": {
          fontSize: "16px",
          lineHeight: 1.5,
        },
      },
      [theme.breakpoints.up("md")]: {
        marginTop: "48px",
        ".MuiTypography-root": {
          fontSize: "18px",
          lineHeight: 1.55,
        },
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "18px",
      },
    }),
  },
};
