import { useTranslation } from "react-i18next";
import PageTemplate from "../Common/PageTemplate";
import { Container, Typography, Box } from "@mui/material";
import { useAdministrationStore } from "@/store/administrationStore";
import { useEffect } from "react";
import { urlFor } from "@/config/sanity/imageUrl";
import { Routes } from "@/types/routes.d";
import BannerComponent from "./parts/BannerComponent";
import { WrapperImg } from "./styled";

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
            marginBottom: { xs: "24px", md: "48px" },
            marginTop: { xs: "48px", lg: "120px" },
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
            flexDirection: "column",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {administrationData &&
            administrationData.map((member, index) => (
              <Box key={index}>
                <Box sx={{ padding: { xs: "24px 0" } }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { md: "1fr 1fr", lg: "494px 436px" },
                      gap: { xs: "16px", md: "24px", lg: "48px" },
                    }}
                  >
                    <WrapperImg className={member.img ? "" : "no-image"}>
                      {member.img ? (
                        <img
                          src={urlFor(member.img).url().toString()}
                          alt={`Зображення ${member.role}`}
                        />
                      ) : (
                        // Дополнительный контент, отображаемый вместо изображения
                        <Box
                          sx={{
                            minWidth: "288px",
                            minHeight: "288px",
                            backgroundColor: "grey",
                          }}
                        ></Box>
                      )}
                    </WrapperImg>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                        }}
                      >
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography variant="body2">{member.role}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default AdministrationPage;
