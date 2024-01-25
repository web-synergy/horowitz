import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { Routes } from "@/types/routes.d";
import { urlFor } from "@/config/sanity/imageUrl";
import { BannerComponentProps } from "@/types/horowitzTypes";

const BannerComponent: React.FC<BannerComponentProps> = ({
  imgSrc,
  copyright,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      position="relative"
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.banner,
        height: { xs: "314px", md: "468px" },
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
          overflow: "hidden",
        },
      }}
    >
      <Container
        sx={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: { xs: "-118px", md: "-198px", lg: 0 },
            height: "100%",
          }}
        >
          <img
            src={imgSrc && urlFor(imgSrc).auto("format").url().toString()}
            alt="banner img"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          B
        </Box>
        {isSmallScreen && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: { xs: "16px", md: "40px", lg: "80px" },
              maxWidth: "100%",
              zIndex: 10,
            }}
          >
            <Breadcrumbs
              title={t(`navigation.${Routes.HOROWITZ}`)}
              mode="dark"
            />
          </Box>
        )}

        <Typography
          variant="bodyMedium"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            color: theme.palette.neutral[60],
            padding: { xs: "16px 16px", md: "16px 40px", lg: "16px 80px" },
            width: "100%",
            zIndex: 10,
          }}
        >
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
};

export default BannerComponent;
