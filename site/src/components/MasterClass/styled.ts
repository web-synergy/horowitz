import { Box, styled } from "@mui/material";

export const Iframe = styled("iframe")(() => ({
  height: "100%",
  width: "100%",
  border: "none",
}));

export const WrapperContent = styled(Box)(({ theme }) => ({
  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  [theme.breakpoints.up("md")]: {
    width: "332px",
    height: "236px",
    minWidth: "332px",
  },

  [theme.breakpoints.up("lg")]: {
    width: "357px",
    height: "214px",
    minWidth: "357px",
  },
}));
