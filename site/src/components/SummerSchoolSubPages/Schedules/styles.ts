import { Box, styled } from "@mui/material";

export const TabletContentWrapper = styled(Box)(({ theme }) => ({
  padding: "8px 8px",
  textAlign: "start",

  [theme.breakpoints.up("md")]: {
    padding: "40px 8px",
    textAlign: "center",
  },

  [theme.breakpoints.up("lg")]: {
    padding: "48px 16px",
  },
}));
