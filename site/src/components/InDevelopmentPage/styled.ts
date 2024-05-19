import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";

export const StyledContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
      padding: "183px 0 183px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "245px 0 245px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "275px 0 275px",
    },
  })
);

export const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: "0 auto",
  textAlign: "center",
  [theme.breakpoints.up("xs")]: {
    maxWidth: "288px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "510px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "100%",
  },
}));

export const StyledTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
      marginBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "60px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "80px",
    },
  })
);
