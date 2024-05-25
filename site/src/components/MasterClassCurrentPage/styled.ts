import { Box, styled } from "@mui/material";

export const WrapperContent = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  // minHeight: "248px",
  // maxHeight: "500px",
  // maxWidth: "360px",

  [theme.breakpoints.up("md")]: {
    // width: "332px",
    // height: "224px",
    // minWidth: "332px",
  },
  [theme.breakpoints.up("lg")]: {
    // width: "548px",
    // height: "384px",
    // minWidth: "357px",
  },

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
    // objectFit: "cover",
  },
}));
