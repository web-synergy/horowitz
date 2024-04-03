import { inputAdornmentClasses } from "@mui/material/InputAdornment";
import { inputBaseClasses } from "@mui/material/InputBase";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { Components, Theme } from "@mui/material/styles";

export const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${inputBaseClasses.input}`]: {
        outline: "none",
        padding: 0,

        "&:placeholder": {
          opacity: 1,
          color: theme.palette.neutral[30],
        },
      },

      [`& .${inputAdornmentClasses.root}`]: {
        color: "inherit",
      },
    }),
  },
};

export const MuiTextField: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "--TextField-brandBorderColor": theme.palette.common.black,
      "--TextField-brandBorderHoverColor": theme.palette.primary.main,
      "--TextField-brandBorderFocusedColor": theme.palette.action.focus,
    }),
  },
};

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    notchedOutline: {
      borderColor: "var(--TextField-brandBorderColor)",
      borderRadius: 5,
      transition: "all .3s ease-in",
    },
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.common.white,
      padding: "16px 8px",
      fontSize: "18px",
      lineHeight: 1.25,
      height: 60,

      [theme.breakpoints.up("md")]: {
        fontSize: "1.125rem",
        lineHeight: 1.222,
      },

      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "var(--TextField-brandBorderHoverColor)",
      },
      [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        border: "1px solid",
        borderColor: "var(--TextField-brandBorderFocusedColor)",
      },
    }),
  },
};
