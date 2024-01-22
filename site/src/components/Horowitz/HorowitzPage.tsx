import { FC, useEffect } from "react";
import PageTemplate from "../Common/PageTemplate";
import { Button, Container, Typography, Box } from "@mui/material";
import Breadcrumbs from "../Common/Breadcrumbs";
import { Routes } from "@/types/routes.d";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useHorowitzStore } from "@/store/horowitzStore";
import { useTranslation } from "react-i18next";
import { Section } from "../Contacts/styled";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography variant="bodyRegular" component={"p"}>
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
          mb: { xs: "24px", md: "32px" },
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
          mb: { xs: "24px", md: "32px" },
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
    <Box position="relative" sx={{ backgroundColor: "#0D0C06" }} mb={4}>
      <img
        src={imgSrc}
        alt="Banner"
        style={{ width: "100%", height: "auto" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
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
          padding: 2,
          width: "100%",
        }}
      >
        {copyright}
      </Typography>
    </Box>
  );
};

const HorowitzPage: FC = () => {
  const {
    i18n: { language },
    // t,
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
  // console.log(lowerBlockText);
  // console.log(literature);
  return (
    <PageTemplate>
      {bannerData && (
        <BannerComponent
          imgSrc={bannerData.bannerImg}
          copyright={bannerData.bannerCopyright}
        />
      )}
      <Container>
        <Typography variant="h2">Володимир Горовиць</Typography>
        {upperBlockText && (
          <Box sx={{ "p:not(:last-child)": { marginBottom: "16px" } }}>
            <PortableText value={upperBlockText[0]} components={components} />
          </Box>
        )}
        {quote && (
          <Section component={"section"}>
            <Typography variant="h4" gutterBottom>
              {quote.quote}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {quote.author}
            </Typography>
          </Section>
        )}
        {lowerBlockText && (
          <Box sx={{ "p:not(:last-child)": { marginBottom: "16px" } }}>
            <PortableText value={lowerBlockText[0]} components={components} />
          </Box>
        )}
        <Typography variant="h4" gutterBottom>
          Литература
        </Typography>
        {literature && (
          <Box sx={{ "p:not(:last-child)": { marginBottom: "16px" } }}>
            <PortableText value={literature} components={components} />
          </Box>
        )}
        <Button variant="outlined" color="primary">
          Показать больше
        </Button>
      </Container>
    </PageTemplate>
  );
};

export default HorowitzPage;
