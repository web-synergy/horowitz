import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { Routes } from "@/types/routes.d";
import { BannerWrapper } from "../styled";
import administrationDeskBanner from "@/assets/images/administrationDeskBanner.webp";
import administrationTabletBanner from "@/assets/images/administrationTabletBanner.webp";

const BannerComponent: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <BannerWrapper
      img={
        isLargeScreen ? administrationTabletBanner : administrationDeskBanner
      }
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
            left: { xs: "16px", md: "40px", lg: "80px" },
            maxWidth: "100%",
            zIndex: 1000,
          }}
        >
          <Breadcrumbs
            title={t(`navigation.${Routes.ADMINISTRATION}`)}
            mode="dark"
          />
        </Box>
      </Container>
    </BannerWrapper>
  );
};

export default BannerComponent;
