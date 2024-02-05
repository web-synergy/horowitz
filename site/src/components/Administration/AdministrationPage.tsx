import { useTranslation } from "react-i18next";
import PageTemplate from "../Common/PageTemplate";
import { Container, Typography, Box } from "@mui/material";
import { useAdministrationStore } from "@/store/administrationStore";
import { useEffect } from "react";
import { urlFor } from "@/config/sanity/imageUrl";
import { Routes } from "@/types/routes.d";

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

  const { administrationData } = useAdministrationStore();

  // if (administrationData) {
  //   console.log(administrationData);
  // }

  return (
    <PageTemplate>
      <Container>
        <Typography variant="h4" gutterBottom>
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
            administrationData.map((data, index) => (
              <Box key={index}>
                <img
                  src={data.img?.asset && urlFor(data.img).url().toString()}
                  alt={data.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
                <Box>
                  <Typography variant="h6">{data.name}</Typography>
                  <Typography variant="body2">{data.role}</Typography>
                </Box>
              </Box>
            ))}
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default AdministrationPage;
