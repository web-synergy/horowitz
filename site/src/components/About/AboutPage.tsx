import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes } from "@/types/routes.d";
import { Box, Container, Typography } from "@mui/material";
import Loader from "../Common/Loader";
import PageTemplate from "../Common/PageTemplate";

import { useAboutCompetitionStore } from "@/store/aboutCompetitionStore";
import BannerComponent from "./parts/BannerComponent";
import TextBlockSection from "./parts/TextBlockSection.tsx";
import ImageSection from "./parts/ImageSection.tsx";
import { useLiveQuery } from "@sanity/preview-kit";
import { aboutCompetitionQuery } from "@/api/query.ts";

const AboutPage: FC = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const fetchAboutCompetitionData = useAboutCompetitionStore(
    (state) => state.fetchAboutCompetitionData
  );

  useEffect(() => {
    fetchAboutCompetitionData(language);
  }, [fetchAboutCompetitionData, language]);

  const aboutCompetitionData = useAboutCompetitionStore();

  const [
    {
      upperTextBlock,
      middleTextBlock,
      lowerTextBlock,
      imgHistoryOne,
      imgHistoryTwo,
      imgStatistics,
      isLoading,
    },
  ] = useLiveQuery(aboutCompetitionData, aboutCompetitionQuery, {
    language,
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <PageTemplate>
      <BannerComponent />

      <Container>
        <Box
          sx={{
            paddingTop: { xs: "48px", md: "54px", lg: "80px" },
            paddingBottom: { xs: "24px", lg: "80px" },
          }}
        >
          <Typography
            variant="h1"
            component={"p"}
            sx={{
              textTransform: "uppercase",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            {t(`navigation.${Routes.DETAILS}`)}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: { xs: "24px 0px", lg: "80px 0px" },
          }}
        >
          <TextBlockSection blocks={upperTextBlock} />
        </Box>
        {imgHistoryOne && <ImageSection image={imgHistoryOne} />}
        {middleTextBlock && (
          <Box
            sx={{
              padding: { xs: "24px 0px", lg: "80px 0px" },
            }}
          >
            <TextBlockSection blocks={middleTextBlock} />
          </Box>
        )}
        {imgHistoryTwo && <ImageSection image={imgHistoryTwo} />}
        {lowerTextBlock && (
          <Box
            sx={{
              padding: { xs: "24px 0px", lg: "80px 0px" },
            }}
          >
            <TextBlockSection blocks={lowerTextBlock} />
          </Box>
        )}
        {imgStatistics && <ImageSection image={imgStatistics} />}
      </Container>
    </PageTemplate>
  );
};

export default AboutPage;
