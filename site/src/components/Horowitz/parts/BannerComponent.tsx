import React from "react";
import { Box, Container } from "@mui/material";

import { BannerComponentProps } from "@/types/horowitzTypes";
import MainBanner from "@/components/Common/MainBanner";

const BannerComponent: React.FC<BannerComponentProps> = ({
  banner,
  copyright,
}) => {
  return (
    <Box position="relative">
      <MainBanner banner={banner} />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingY: { xs: "8px", md: "16px" },
            }}
          >
            <Box
              component="p"
              sx={{
                margin: 0,
                fontSize: "0.75rem",
                lineHeight: 1,
                color: (theme) => theme.palette.neutral[60],
              }}
            >
              {copyright}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BannerComponent;
