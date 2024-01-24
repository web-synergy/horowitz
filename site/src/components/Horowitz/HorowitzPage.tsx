import { FC, useEffect, useState } from "react";
import PageTemplate from "../Common/PageTemplate";
import {
  Button,
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Breadcrumbs from "../Common/Breadcrumbs";
import { Routes } from "@/types/routes.d";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useHorowitzStore } from "@/store/horowitzStore";
import { useTranslation } from "react-i18next";
import { Section } from "../Contacts/styled";
import { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        variant="bodyRegular"
        component={"p"}
        sx={{
          textAlign: "justify",
          flex: { lg: "1 1 calc(50% - 12px)" },
        }}
      >
        {children}
      </Typography>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <Typography
        component={"ul"}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          gap: "16px",
        }}
        variant="bodyRegular"
      >
        {children}
      </Typography>
    ),

    number: ({ children }) => (
      <Typography
        component={"ol"}
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "18px",
          gap: "16px",
        }}
        variant="bodyRegular"
      >
        {children}
      </Typography>
    ),
  },
};

interface BannerComponentProps {
  imgSrc: string;
  copyright: string;
}

const BannerComponent: React.FC<BannerComponentProps> = ({
  imgSrc,
  copyright,
}) => {
  const { t } = useTranslation();

  return (
    <Box
      position="relative"
      sx={{
        width: "100%",
        backgroundColor: "#0D0C06",
        height: { xs: "314px", md: "468px" },
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.6)", // колір затемнення
          zIndex: 1,
          overflow: "hidden",
        },
      }}
    >
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
            right: { xs: "-118px", md: "-198px", lg: 0 },
            height: "100%",
          }}
        >
          <img
            src={imgSrc}
            alt="banner img"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          B
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: { xs: "16px", md: "40px", lg: "80px" },
            maxWidth: "100%",
            zIndex: 10,
          }}
        >
          <Breadcrumbs title={t(`navigation.${Routes.HOROWITZ}`)} mode="dark" />
        </Box>
        <Typography
          variant="bodyMedium"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            color: "#666",
            padding: { xs: "16px 16px", md: "16px 40px", lg: "16px 80px" },
            width: "100%",
            zIndex: 10,
          }}
        >
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
};

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

  const { bannerData, quote, upperBlockText, lowerBlockText, literature } =
    useHorowitzStore();

  // console.log(bannerData);
  // console.log(quote);
  // console.log(upperBlockText);
  // console.log(lowerBlockText[0]);
  // console.log(literature);

  const [visibleItemsLiterature, setVisibleItemsLiterature] = useState(4);

  const [isAllLiteratureVisible, setIsAllLiteratureVisible] = useState(false);

  const handleShowMore = () => {
    setVisibleItemsLiterature(literature.length);
    setIsAllLiteratureVisible(true);
  };

  const swapElements = (
    array: PortableTextBlock[], // Ensure that the array is an array of ArrayElement objects
    index1: number,
    index2: number
  ) => {
    if (array && array.length > index1 && array.length > index2) {
      const newArray = [...array]; // Create a new array to avoid mutation
      [newArray[index1], newArray[index2]] = [
        newArray[index2],
        newArray[index1],
      ];
      return newArray;
    }
    return array;
  };

  // Swap elements within the first block of blockText if it exists and the screen is large
  const swappedUpperBlockText =
    isLargeScreen && upperBlockText
      ? swapElements(upperBlockText[0], 1, 2)
      : upperBlockText[0];

  console.log(swappedUpperBlockText);

  const swappedLowerBlockText =
    isLargeScreen && lowerBlockText
      ? swapElements(lowerBlockText[0], 1, 2)
      : lowerBlockText[0];
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
          {upperBlockText && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                columnGap: "24px",
                rowGap: "16px",
              }}
            >
              <PortableText
                value={swappedUpperBlockText}
                components={components}
              />
            </Box>
          )}
        </Box>
      </Container>
      {quote && (
        <Section
          component={"section"}
          sx={{
            textAlign: "center",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: { xs: "24px 20px", md: "72px 54px", lg: "148px 172px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              marginBottom: {
                xs: "16px",
                md: "32px",
                lg: "24px",
              },
            }}
          >
            {quote.quote}
          </Typography>
          <Typography
            variant="subhead"
            sx={{
              color: "#E19C2A",
            }}
          >
            — {quote.author}
          </Typography>
        </Section>
      )}
      <Container>
        {lowerBlockText && (
          <Box
            sx={{
              padding: { xs: "24px 0px", lg: "80px 0px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                columnGap: "24px",
                rowGap: "16px",
              }}
            >
              <PortableText
                value={swappedLowerBlockText}
                components={components}
              />
            </Box>
          </Box>
        )}

        <Typography variant="subhead" sx={{ textAlign: "left" }} gutterBottom>
          {t(`horowitzPage.literature`)}:
        </Typography>
        {literature && (
          <Box
            sx={{
              paddingTop: { xs: "24px", md: "16px", lg: "24px" },
              "p:not(:last-child)": { marginBottom: "16px" },
            }}
          >
            <PortableText
              value={literature.slice(0, visibleItemsLiterature)}
              components={components}
            />
          </Box>
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
