import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLiveQuery } from "@sanity/preview-kit";
import { currentMasterClassQuery } from "@/api/query";
import Loader from "../Common/Loader";
// import { parseAndFormatDate } from "@/utils/helpers";
import PageTemplate from "../Common/PageTemplate";
import { useFetch } from "@/hook/useFetch";
import { Routes } from "@/types/routes.d";
import PortableComponent from "../Templates/PortableComponent/PortableComponent";
import { urlFor } from "@/config/sanity/imageUrl";
import ReactPlayer from "react-player";
import { WrapperContent } from "./styled";
import { IMasterClass } from "@/types/masterClassTypes";

const MasterClassCurrentPage = () => {
  const { slug } = useParams();

  const {
    i18n: { language },
  } = useTranslation();

  const { responseData, loading, error } = useFetch<IMasterClass>(
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
                width: { xs: "100%", md: "332px", lg: "50%" },
                height: { md: "224px", lg: "384px" },
                minHeight: "185px",
                mr: { md: "24px" },
                mb: { xs: 2, md: 0 },
              }}
            >
              {data?.img ? (
                <WrapperContent>
                  <img
                    src={urlFor(data?.img)
                      .auto("format")
                      // .width(100)
                      // .height(100)
                      // .fit("fill")
                      .url()
                      .toString()}
                    // alt={img.alt}
                  />
                </WrapperContent>
              ) : (
                <WrapperContent>
                  <ReactPlayer
                    url={data?.video}
                    width="100%"
                    height="100%"
                    playing={false}
                    controls={true}
                  />
                </WrapperContent>
              )}
            </Box>
            <Box sx={{ float: "none" }}>
              <Box
                sx={{
                  mt: { xs: "24px", md: "32px" },
                  // maxWidth: "360px",
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
