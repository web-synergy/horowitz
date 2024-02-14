import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container } from "@mui/material";

import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { Routes } from "@/types/routes.d";
import { BannerWrapper } from "../styled";

import banner_img from "@/assets/images/bg_about_competition.webp";

const BannerComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BannerWrapper img={banner_img}>
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
