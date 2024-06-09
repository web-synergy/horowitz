import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, List, Stack, Typography } from "@mui/material";

import PageTemplate from "../Common/PageTemplate";
import { useMasterClassStore } from "@/store/masterClassStore";
import { Routes } from "@/types/routes.d";
import { IMasterClass } from "@/types/masterClassTypes";
import MasterClassListItem from "./parts/MasterClassListItem";
import PaginationMasterClass from "./parts/PaginationMasterClass";
import { truncateDescription } from "@/utils/truncateDescription";
import Loader from "../Common/Loader";

const MasterClassPage = () => {
  const [sortedMasterClasses, setSortedMasterClasses] = useState<
    IMasterClass[]
  >([]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, urlPage]);

  useEffect(() => {
    if (masterClassesList) {
      const sortedList = [...masterClassesList].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setSortedMasterClasses(sortedList);
    }
  }, [masterClassesList]);

  if (loading) return <Loader />;

  return (
    <PageTemplate>
      <Container>
        <Stack>
          <Typography
            sx={{
              mb: { xs: "24px", md: "40px", lg: "48px" },
            }}
            variant="h1"
          >
            {t(`navigation.${Routes.MASTER_CLASS}`)}
          </Typography>
          <List
            sx={{
              display: "grid",
              flexDirection: "column",
              gap: { xs: "62px", md: "56px" },
              justifyContent: { xs: "center", md: "flex-start" },
              mb: { xs: "54px", md: "48px" },
            }}
          >
            {sortedMasterClasses.map((masterClass: IMasterClass, index) => (
              <MasterClassListItem
                key={index}
                title={masterClass.title}
                img={masterClass.img}
                video={masterClass.video}
                slug={masterClass.slug}
                // description={truncateDescription(masterClass.description, 100)}
                description={masterClass.description}
              />
            ))}
          </List>
          <PaginationMasterClass
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
