import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes } from "@/types/routes.d";
import { Box, Container, Typography } from "@mui/material";
// import Loader from "../Common/Loader";
import PageTemplate from "../Common/PageTemplate";

import { useAboutCompetitionStore } from "@/store/aboutCompetitionStore";
// import BannerComponent from "./parts/BannerComponent";
// import LiteratureSection from "./parts/LiteratureSection";
// import QuoteSection from "./parts/QuoteSection";
// import TextBlockSection from "./parts/TextBlockSection.tsx";
// import { Buttons } from "@/types/translation.d";
// import { useLiveQuery } from "@sanity/preview-kit";
// import { horowitzQuery } from "@/api/query.ts";

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

  // const horowitzData = useHorowitzStore();

  // const [
  //   {
  //     bannerData,
  //     quote,
  //     upperTextBlock,
  //     lowerTextBlock,
  //     literature,
  //     isLoading,
  //   },
  // ] = useLiveQuery(horowitzData, horowitzQuery, {
  //   language,
  // });

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <PageTemplate>
      {/* {bannerData && (
        <BannerComponent
          imgSrc={bannerData.bannerImg}
          copyright={bannerData.bannerCopyright}
        />
      )} */}

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
            {t(`navigation.${Routes.HOROWITZ}`)}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: { xs: "24px 0px", lg: "80px 0px" },
          }}
        >
          {/* <TextBlockSection blocks={"fff"} /> */}
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default AboutPage;
