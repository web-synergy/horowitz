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
    <Box
      position="relative"
      sx={{
        maxWidth: "1280px",
        margin: "0 auto",
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
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: { xs: 0, md: "48px", lg: "228px" },
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
            Володимир Горовиць
          </Typography>
          {upperBlockText && (
            <Box
              sx={{
                "p:not(:last-child)": { marginBottom: "16px" },
              }}
            >
              <PortableText value={upperBlockText[0]} components={components} />
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
            padding: { xs: "24px 16px", md: "72px 54px", lg: "148px 172px" },
          }}
        >
          <Typography variant="h1" sx={{}}>
            {quote.quote}
          </Typography>
          <Typography
            variant="subhead"
            sx={{
              textAlign: "center",
              position: "relative",
              color: "#E19C2A",
              "::before": {
                content: '""',
                position: "absolute",
                width: "20px", // Ширина полоски
                height: "2px", // Высота полоски
                background: "#E19C2A", // Цвет полоски
                top: "50%", // Смещение полоски по вертикали
                transform: "translateY(-50%)", // Выравнивание полоски по вертикали
                left: "-28px", // Смещение полоски влево
              },
            }}
          >
            {quote.author}
          </Typography>
        </Section>
      )}
      <Container>
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
