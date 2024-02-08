import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Routes } from "@/types/routes.d";
import { Box, Button, Container, Typography } from "@mui/material";
import Loader from "../Common/Loader";
import PageTemplate from "../Common/PageTemplate";

import { useHorowitzStore } from "@/store/horowitzStore";
import BannerComponent from "./parts/BannerComponent";
import LiteratureSection from "./parts/LiteratureSection";
import QuoteSection from "./parts/QuoteSection";
import TextBlockSection from "./parts/TextBlockSection.tsx";
import { Buttons } from "@/types/translation.d";
import { useLiveQuery } from "@sanity/preview-kit";
import { horowitzQuery } from "@/api/query.ts";

const HorowitzPage: FC = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const fetchHorowitzData = useHorowitzStore(
    (state) => state.fetchHorowitzData
  );

  useEffect(() => {
    fetchHorowitzData(language);
  }, [fetchHorowitzData, language]);
  const horowitzData = useHorowitzStore();

  const [
    {
      bannerData,
      quote,
      upperTextBlock,
      lowerTextBlock,
      literature,
      isLoading,
    },
  ] = useLiveQuery(horowitzData, horowitzQuery, {
    language,
  });
  const [visibleItemsLiterature, setVisibleItemsLiterature] = useState(4);

  const [isAllLiteratureVisible, setIsAllLiteratureVisible] = useState(false);

  const handleShowMore = () => {
    setVisibleItemsLiterature(literature.length);
    setIsAllLiteratureVisible(true);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <PageTemplate>
      {bannerData && (
        <BannerComponent
          imgSrc={bannerData.bannerImg}
          copyright={bannerData.bannerCopyright}
        />
      )}

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
          <TextBlockSection blocks={upperTextBlock} />
        </Box>
      </Container>
      {quote && <QuoteSection quote={quote} />}
      <Container>
        {lowerTextBlock && (
          <Box
            sx={{
              padding: { xs: "24px 0px", lg: "80px 0px" },
            }}
          >
            <TextBlockSection blocks={lowerTextBlock} />
          </Box>
        )}

        <Typography variant="subhead" sx={{ textAlign: "left" }} gutterBottom>
          {t(`horowitzPage.literature`)}:
        </Typography>
        {literature && (
          <LiteratureSection
            literature={literature}
            visibleItems={visibleItemsLiterature}
          />
        )}
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            marginTop: { xs: "48px", md: "54px", lg: "80px" },
            marginBottom: { xs: "72px", md: "96px", lg: "118px" },
          }}
        >
          <Button
            sx={{ width: "288px" }}
            variant="transparent"
            onClick={handleShowMore}
            disabled={isAllLiteratureVisible}
          >
            {t(`buttons.${Buttons.SHOW_MORE}`)}
          </Button>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default HorowitzPage;
