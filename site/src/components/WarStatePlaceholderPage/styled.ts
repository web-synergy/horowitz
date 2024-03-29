import {
  Box,
  BoxProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";

interface BannerWrapperProps {
  img: string;
}

export const BannerWrapper = styled(Box)<BannerWrapperProps>(
  ({ theme, img }) => ({
    width: "100%",

    paddingTop: "72px",
    paddingBottom: "72px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(to right, rgba(8, 7, 8, 0.60), rgba(8, 7, 8, 0.60)), url(${img})`,
    [theme.breakpoints.up("md")]: {
      minHeight: "68vh",
      paddingTop: "96px",
      paddingBottom: "96px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "160px",
      paddingBottom: "160px",
    },
  })
);

export const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: "0 auto",
  textAlign: "center",
  maxWidth: "1280px",
  minWidth: "288px",
  padding: "0 16px",

  [theme.breakpoints.up("md")]: {
    padding: "0 60px",
  },
}));

export const TitleTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    marginBottom: "24px",
    color: theme.palette.primary.main,

    fontSize: "2,875rem",
    fontWeight: 400,
    lineHeight: "normal",

    [theme.breakpoints.up("md")]: {
      marginBottom: "32px",
      fontSize: "5rem",
    },
    [theme.breakpoints.up("lg")]: { fontSize: "7rem" },
  })
);

export const MessageTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    marginBottom: "56px",
    [theme.breakpoints.up("md")]: {
      marginBottom: "38px",
    },
    [theme.breakpoints.up("lg")]: { marginBottom: "80px" },
  })
);
