import { styled } from "@mui/material";

export const StyledButton = styled("button")(({ theme }) => ({
  width: "288px",
  minWidth: "226px",

  textTransform: "none",
  fontSize: "1rem",
  lineHeight: "1.75",
  backgroundColor: "transparent",
  borderColor: theme.palette.common.black,
  color: theme.palette.common.black,
  border: "1px solid",
  borderRadius: "4px",
  padding: "9px 20px",

  transition: "all .3s ease-in",

  [theme.breakpoints.up("md")]: {
    padding: "15px 20px",
    fontSize: "1.125rem",
    lineHeight: "1.556",
  },

  "@media (hover: hover)": {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.common.black,
      borderColor: "transparent",
    },
  },
  "@media (hover: none)": {
    "&:active": {
      backgroundColor: "transparent",
      color: theme.palette.common.black,
      borderColor: theme.palette.action.hover,
    },
  },

  "&:focus-visible": {
    borderColor: theme.palette.primary.dark,
    backgroundColor: "transparent",
  },
}));
