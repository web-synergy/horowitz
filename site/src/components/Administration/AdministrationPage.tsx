import { useTranslation } from "react-i18next";
import PageTemplate from "../Common/PageTemplate";
import { Container, Typography, Box } from "@mui/material";
import { useAdministrationStore } from "@/store/administrationStore";
import { useEffect } from "react";
import { urlFor } from "@/config/sanity/imageUrl";
import { Routes } from "@/types/routes.d";
import BannerComponent from "./parts/BannerComponent";

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

  return (
    <PageTemplate>
      <BannerComponent />
      <Container>
        <Typography
          sx={{
            marginBottom: "24px",
            textAlign: "center",
          }}
          variant="h4"
          gutterBottom
        >
          {t(`navigation.${Routes.ADMINISTRATION}`)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {administrationData &&
            administrationData.map((member, index) => (
              <Box key={index}>
                <img
                  src={member.img?.asset && urlFor(member.img).url().toString()}
                  alt={member.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
                <Box>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2">{member.role}</Typography>
                </Box>
              </Box>
            ))}
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default AdministrationPage;
