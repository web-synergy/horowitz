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
    height: "100%",
    // margin: "0 auto",
    paddingTop: "72px",
    paddingBottom: "72px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    backgroundImage: `linear-gradient(to right, rgba(8, 7, 8, 0.60), rgba(8, 7, 8, 0.60)), url(${img})`,
    [theme.breakpoints.up("md")]: {
      paddingTop: "96px",
      paddingBottom: "96px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "160px",
      paddingBottom: "160px",
    },
  })
);

export const TitleTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    marginBottom: "24px",
    [theme.breakpoints.up("md")]: {
      marginBottom: "32px",
    },
    [theme.breakpoints.up("lg")]: {},
  })
);

export const MessageTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    marginBottom: "56px",
    [theme.breakpoints.up("md")]: {
      marginBottom: "38px",
    },
    [theme.breakpoints.up("lg")]: { marginBottom: "60px" },
  })
);

export const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: "0 auto",
  textAlign: "center",
  [theme.breakpoints.up("xs")]: {
    maxWidth: "288px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "664px",
  },
  // [theme.breakpoints.up("lg")]: {
  //   maxWidth: "100%",
  // },
}));
