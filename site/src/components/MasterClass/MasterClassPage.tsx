import { useEffect } from "react";
import PageTemplate from "../Common/PageTemplate";
import { Container, List, Typography, Stack, Box } from "@mui/material";

import { useMasterClassStore } from "@/store/masterClassStore";
import { useNavigate } from "react-router-dom";
import NewsListItem from "./parts/NewsListItem";
import { INews } from "@/types/newsTypes";
import { useTranslation } from "react-i18next";
import { Routes } from "@/types/routes.d";

import { useSearchParams } from "react-router-dom";
import Loader from "../Common/Loader";
import PaginationNews from "./parts/PaginationNews";
import { truncateDescription } from "@/utils/truncateDescription";
import PlayerCard from "./parts/PlayerCard";
import DisplayVideoCard from "../Templates/DisplayVideoCard/DisplayVideoCard";

import { Iframe } from "./styled";

const MasterClassPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const {
    fetchMasterClasses,
    masterClassesList,
    pageQty,
    loading,
    currentPage,
    requestLang,
  } = useMasterClassStore();

  console.log(masterClassesList);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const urlPage = +(searchParams.get("page") || 1);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isNaN(urlPage)) {
      return navigate("/404");
    }
    if (urlPage <= 0) {
      return navigate("/404");
    }
    if (currentPage !== urlPage || requestLang !== language) {
      fetchMasterClasses(language, urlPage);
    }
  }, [language, urlPage]);

  if (loading) return <Loader />;

  return (
    <PageTemplate>
      <Container>
        <Stack>
          <Typography
            sx={{
              mb: { xs: "24px", md: "48px" },
            }}
            variant="h2"
          >
            {t(`navigation.${Routes.MASTER_CLASS}`)}
          </Typography>
          <Box sx={{ aspectRatio: { xs: 1.8, md: 1.5 } }}>
            <Iframe
              src={
                "https://www.youtube.com/embed/vyktI8gCXkY?si=7lnMClGd1lDYvMqm"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sandbox="allow-scripts allow-presentation allow-same-origin allow-popups"
              sx={{ aspectRatio: "16/9", marginTop: "40px" }}
            />
          </Box>
          <List
            sx={{
              display: "grid",
              flexDirection: "column",
              gap: 7,
              justifyContent: { xs: "center", md: "flex-start" },
              mb: { xs: 3, md: 6 },
            }}
          >
            {masterClassesList &&
              masterClassesList.map((news: INews, index) => (
                <NewsListItem
                  key={index}
                  title={news.title}
                  img={news.img}
                  slug={news.slug}
                  description={truncateDescription(news.description, 100)}
                />
              ))}
          </List>

          <PaginationNews
            pageQty={pageQty}
            setSearchParams={setSearchParams}
            urlPage={urlPage}
          />
        </Stack>
      </Container>
    </PageTemplate>
  );
};

export default MasterClassPage;
