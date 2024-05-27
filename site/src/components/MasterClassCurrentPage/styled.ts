import { Box, styled } from "@mui/material";

export const WrapperContent = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  aspectRatio: 1.55,

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "& iframe": {
    display: "block",
    width: "100%",
    height: "100%",
    minHeight: "185px",
  },
}));
