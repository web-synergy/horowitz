import { Box, styled } from "@mui/material";

export const WrapperImg = styled(Box)(() => ({
  paddingTop: "48px",
  paddingBottom: "56px",
  maxHeight: "484px",
  textAlign: "center",

  "& img": {
    display: "block",
    maxWidth: "484px",
    maxHeight: "374px",
    margin: "0 auto",
  },
}));

export const TabletContentWrapper = styled(Box)(({ theme }) => ({
  padding: "8px 8px",
  textAlign: "start",

  [theme.breakpoints.up("md")]: {
    padding: "40px 8px",
  },

  [theme.breakpoints.up("lg")]: {
    padding: "48px 28px",
  },
}));
