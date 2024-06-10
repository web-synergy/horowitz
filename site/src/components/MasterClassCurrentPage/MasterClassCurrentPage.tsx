import { currentMasterClassQuery } from "@/api/query";
import { Box, Container, Typography } from "@mui/material";
import { useLiveQuery } from "@sanity/preview-kit";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { urlFor } from "@/config/sanity/imageUrl";

import Loader from "../Common/Loader";
import { useFetch } from "@/hook/useFetch";
import { IMasterClass } from "@/types/masterClassTypes";
import { Routes } from "@/types/routes.d";

import PageTemplate from "../Common/PageTemplate";
import { WrapperContentImage, WrapperContentVideo } from "./styled";
import { useState } from "react";
import TextBlockComponent from "../Templates/TextBlockComponent/TextBlockComponent";

const MasterClassCurrentPage = () => {
  const [isPreviewPoster, setIsPreviewPoster] = useState(false);
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
  console.log(data?.description);

  if (loading) return <Loader />;
  if (error) {
    console.error(error);
  }
  if (data)
    return (
      <PageTemplate goBackUrl={Routes.NEWS}>
        <Container>
          <Typography
            variant="h2"
            sx={{
              mb: { xs: "24px", md: "40px", lg: "48px" },
            }}
          >
            {data.title}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                float: { md: "left" },
                width: { xs: "100%", md: "332px", lg: "548px" },
                height: { md: "224px", lg: "384px" },
                minHeight: "185px",
                mr: { md: "24px" },
              }}
            >
              {data?.img ? (
                <WrapperContentImage>
                  <img
                    src={urlFor(data?.img)
                      .auto("format")
                      .width(548)
                      .height(384)
                      .fit("fill")
                      .url()
                      .toString()}
                    alt={data?.img.alt}
                  />
                </WrapperContentImage>
              ) : (
                <WrapperContentVideo isPreviewPoster={isPreviewPoster}>
                  <ReactPlayer
                    url={data?.video}
                    width="100%"
                    height="100%"
                    playing={false}
                    controls={true}
                    light={true}
                    onClickPreview={() => setIsPreviewPoster(true)}
                    playIcon={<div className="custom-play-button"></div>}
                  />
                </WrapperContentVideo>
              )}
            </Box>
            <Box sx={{ float: "none" }}>
              <Box
                sx={{
                  mt: { xs: "24px", md: "32px" },
                }}
              >
                {data.description && (
                  <TextBlockComponent text={data.description} inline />
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </PageTemplate>
    );
};

export default MasterClassCurrentPage;
