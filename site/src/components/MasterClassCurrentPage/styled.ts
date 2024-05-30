import { Box, styled } from "@mui/material";

interface WrapperContentVideoProps {
  isPreviewPoster: boolean;
}

export const WrapperContentImage = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  aspectRatio: 1.55,
  position: "relative",
  overflow: "hidden",

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const WrapperContentVideo = styled("div")<WrapperContentVideoProps>(
  ({ theme, isPreviewPoster }) => ({
    width: "100%",
    height: "100%",
    aspectRatio: 1.55,
    position: "relative",
    overflow: "hidden",

    "&::after": {
      content: '""',
      position: "absolute",
      display: isPreviewPoster ? "none" : "block",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 2,
    },

    "& .react-player__preview": {
      position: "relative",
    },

    "& .custom-play-button": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "68px",
      height: "48px",
      backgroundColor: theme.palette.action.active,
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      zIndex: 5,
      transition: "all .3s ease-in",
    },

    "& .custom-play-button::before": {
      content: '""',
      display: "block",
      width: "0",
      height: "0",
      borderLeft: `18px solid ${theme.palette.common.white}`,
      borderTop: "12px solid transparent",
      borderBottom: "12px solid transparent",
    },

    "& .custom-play-button:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  })
);
