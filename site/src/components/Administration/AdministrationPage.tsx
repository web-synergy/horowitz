import { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import PageTemplate from "../Common/PageTemplate";
import { useAdministrationStore } from "@/store/administrationStore";
import { Routes } from "@/types/routes.d";
import BannerComponent from "./parts/BannerComponent";
import MembersListBlock from "./parts/MembersListBlock";

const AdministrationPage = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const fetchAdministrationData = useAdministrationStore(
    (state) => state.fetchAdministrationData
  );

  useEffect(() => {
    fetchAdministrationData(language);
  }, [fetchAdministrationData, language]);

  const administrationData = useAdministrationStore(
    (state) => state.administrationData
  );

  if (!administrationData?.length) return null;

  const halfLength = Math.ceil(administrationData.length / 2);
  const firstBlockMembers = administrationData.slice(0, halfLength);
  const secondBlockMembers = administrationData.slice(halfLength);

  return (
    <PageTemplate>
      <BannerComponent />
      <Container
        sx={{
          paddingTop: { xs: "48px", lg: "120px" },
          paddingBottom: { xs: "72px", md: "96px", lg: "120px" },
        }}
      >
        <Typography
          sx={{
            marginBottom: { xs: "24px", md: "48px" },
            textAlign: "center",
          }}
          variant="h1"
          gutterBottom
        >
          {t(`navigation.${Routes.ADMINISTRATION}`)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { md: "26px" },
          }}
        >
          <MembersListBlock members={firstBlockMembers} />
          <MembersListBlock members={secondBlockMembers} />
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default AdministrationPage;
