import { Box, styled } from "@mui/material";

export const WrapperImg = styled(Box)(({ theme }) => ({
  "& img": {
    display: "block",
    width: "100%",
    height: "296px",
    objectFit: "cover",

    [theme.breakpoints.up("md")]: {
      height: "332px",
    },

    [theme.breakpoints.up("lg")]: {
      height: "514px",
    },
  },
}));
