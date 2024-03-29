import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import GridTemplate from "@/components/Templates/GridTemplate";
import Loader from "@/components/Common/Loader";
import { Routes } from "@/types/routes.d";
import { useAnnualSummerSchoolStore } from "@/store/annualSummerSchoolStore";
import ProfessorCard from "./parts/ProfessorCard";

const Professors = () => {
  const { t } = useTranslation();

  const { professors, isLoading, requestLang } = useAnnualSummerSchoolStore(
    (state) => ({
      professors: state.professors,
      isLoading: state.isLoading,
      requestLang: state.requestLang,
    })
  );

  if (isLoading) return <Loader />;
  if (!requestLang.length) return null;

  return (
    <Container>
      <Box
        sx={{
          paddingTop: { xs: "24px", md: "40px", lg: "48px" },
          paddingBottom: { xs: "74px", md: "98px", lg: "120px" },
        }}
      >
        <Typography
          component={"h1"}
          variant="h1"
          sx={{
            marginBottom: { xs: "24px", md: "40px", lg: "48px" },
            textAlign: "start",
          }}
        >
          {t(`navigation.${Routes.SUMMER_SCHOOL_PROFESSORS}`)}
        </Typography>
        {professors && (
          <GridTemplate
            list={professors}
            gridItem={({ item }) => <ProfessorCard professor={item} />}
          />
        )}
      </Box>
    </Container>
  );
};

export default Professors;
