import { Routes } from "@/types/routes.d";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FC, useEffect, useState } from "react";
import Loader from "../Common/Loader";
import PageTemplate from "../Common/PageTemplate";

import { useHorowitzStore } from "@/store/horowitzStore";
import { swapElementsInArray } from "@/utils/swapElements";
import BannerComponent from "./parts/BannerComponent";
import LiteratureSection from "./parts/LiteratureSection";
import QuoteSection from "./parts/QuoteSection";
import TextBlockSection from "./parts/TextBlockSection.tsx";

const HorowitzPage: FC = () => {
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

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

  const {
    bannerData,
    quote,
    upperTextBlock,
    lowerTextBlock,
    literature,
    isLoading,
  } = useHorowitzStore();

  const [visibleItemsLiterature, setVisibleItemsLiterature] = useState(4);

  const [isAllLiteratureVisible, setIsAllLiteratureVisible] = useState(false);

  const handleShowMore = () => {
    setVisibleItemsLiterature(literature.length);
    setIsAllLiteratureVisible(true);
  };

  // Swap elements within the first block of blockText if it exists and the screen is large
  const currentUpperTextBlock =
    isLargeScreen && upperTextBlock
      ? swapElementsInArray(upperTextBlock[0], 1, 2)
      : upperTextBlock[0];

  const currentLowerTextBlock =
    isLargeScreen && lowerTextBlock
      ? swapElementsInArray(lowerTextBlock[0], 1, 2)
      : lowerTextBlock[0];

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
            sx={{
              textTransform: "uppercase",
              marginBottom: "24px",
              textAlign: { xs: "left", md: "center" },
            }}
          >
            {t(`navigation.${Routes.HOROWITZ}`)}
          </Typography>
          {upperTextBlock && (
            <TextBlockSection blocks={currentUpperTextBlock} />
          )}
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
            {upperTextBlock && (
              <TextBlockSection blocks={currentLowerTextBlock} />
            )}
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
            {t(`horowitzPage.showMore`)}
          </Button>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default HorowitzPage;
