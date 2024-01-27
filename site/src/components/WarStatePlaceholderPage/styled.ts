import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
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
    height: "422px",

    margin: "0 auto",
    paddingTop: "72px",
    paddingBottom: "72px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${img})`,
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
    maxWidth: "664px",
  },
  // [theme.breakpoints.up("lg")]: {
  //   maxWidth: "100%",
  // },
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
