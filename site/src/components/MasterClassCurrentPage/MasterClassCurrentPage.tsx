import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLiveQuery } from "@sanity/preview-kit";
import { currentMasterClassQuery } from "@/api/query";
import { INews } from "@/types/newsTypes";
import Loader from "../Common/Loader";
// import { parseAndFormatDate } from "@/utils/helpers";
import PageTemplate from "../Common/PageTemplate";
import { useFetch } from "@/hook/useFetch";
import { Routes } from "@/types/routes.d";
import NewsBanner from "../Common/NewsBanner";
import PortableComponent from "../Templates/PortableComponent/PortableComponent";

const MasterClassCurrentPage = () => {
  const { slug } = useParams();

  const {
    i18n: { language },
  } = useTranslation();

  const { responseData, loading, error } = useFetch<INews>(
    currentMasterClassQuery,
    {
      slug,
      language,
    }
  );

  const [data] = useLiveQuery(responseData, currentMasterClassQuery, {
    slug,
    language,
  });
  console.log(data);
  if (loading) return <Loader />;
  if (error) {
    console.error(error);
  }
  if (data)
    return (
      <PageTemplate goBackUrl={Routes.NEWS}>
        <Container>
          <Typography variant="h2">{data.title}</Typography>
          <Box sx={{ width: "100%", mb: 4 }}>
            <Box
              sx={{
                float: { md: "left" },
                width: { xs: "100%", md: "50%" },
                mr: { md: 2 },
                mb: { xs: 2, md: 0 },
              }}
            >
              <NewsBanner img={data?.img} />
            </Box>
            <Box sx={{ float: "none" }}>
              <Box
                sx={{
                  mt: { xs: "24px", md: "32px" },
                }}
              >
                {data.description && (
                  <PortableComponent data={data.description} />
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </PageTemplate>
    );
};

export default MasterClassCurrentPage;
