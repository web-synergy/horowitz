import { Box, styled } from "@mui/material";

export const WrapperContent = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "248px",
  maxWidth: "360px",

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

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));
