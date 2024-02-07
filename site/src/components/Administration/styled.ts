import { Box, styled } from "@mui/material";

interface BannerWrapperProps {
  img: string;
}

export const BannerWrapper = styled(Box)<BannerWrapperProps>(
  ({ theme, img }) => ({
    width: "100%",
    height: "314px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(to right, rgba(8, 7, 8, 0.60), rgba(8, 7, 8, 0.60)), url(${img})`,
    [theme.breakpoints.up("md")]: { height: "468px" },
    [theme.breakpoints.up("lg")]: {},
  })
);

export const WrapperImg = styled(Box)(({ theme }) => ({
  maxWidth: "498px",

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",

    [theme.breakpoints.up("md")]: {
      width: "144px",
      height: "144px",
    },

    [theme.breakpoints.up("lg")]: {
      width: "262px",
      height: "262px",
    },
  },
}));

export const TextBlock = styled("p")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "24px",

  [theme.breakpoints.up("md")]: {
    lineHeight: "28px",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "18px",
  },
}));
