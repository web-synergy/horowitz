import { Box, styled } from "@mui/material";

export const WrapperContent = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  aspectRatio: 1.55,
  position: "relative",

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
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    zIndex: 1,
  },

  "& .custom-play-button::before": {
    content: '""',
    display: "block",
    width: "0",
    height: "0",
    borderLeft: "18px solid #ff0000", // Цвет кнопки YouTube
    borderTop: "12px solid transparent",
    borderBottom: "12px solid transparent",
  },

  "& .custom-play-button:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
}));
