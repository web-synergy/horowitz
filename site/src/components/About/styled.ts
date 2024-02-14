import { Box, styled } from "@mui/material";

interface BannerWrapperProps {
  img: string;
}

export const BannerWrapper = styled(Box)<BannerWrapperProps>(
  ({ theme, img }) => ({
    width: "100%",
    height: "46vw",
    minHeight: "200px",
    maxHeight: "40vh",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundImage: `linear-gradient(to right, rgba(8, 7, 8, 0.60), rgba(8, 7, 8, 0.60)), url(${img})`,
    [theme.breakpoints.up("md")]: { height: "468px" },
    [theme.breakpoints.up("lg")]: { height: "596px" },
  })
);
