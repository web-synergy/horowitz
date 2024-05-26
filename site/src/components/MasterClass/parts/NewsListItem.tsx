import GrowView from "@/components/Common/GrowView";
import SvgSpriteIcon from "@/components/Common/SvgSpriteIcon";
import { urlFor } from "@/config/sanity/imageUrl";
import { IImage } from "@/types/commonTypes";
import { Buttons } from "@/types/translation.d";

import {
  Box,
  Button,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { t } from "i18next";
import { Link as RouterLink } from "react-router-dom";
import PortableComponent from "@/components/Templates/PortableComponent/PortableComponent";
import { PortableTextBlock } from "@portabletext/types";
import ReactPlayer from "react-player";
import { WrapperContent } from "../styled";

interface INewsListItem {
  img?: IImage;
  video?: string;
  title: string;
  description: PortableTextBlock[];
  slug: string;
}

const NewsListItem = ({
  img,
  video,
  title,
  description,
  slug,
}: INewsListItem) => {
  const theme = useTheme();
  const isMob = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const imageWidth = isMob ? 288 : isDesktop ? 357 : 332;
  const aspectRatio = 1;

  const imageHeight = Math.floor(imageWidth / aspectRatio);

  return (
    <ListItem>
      <GrowView>
        <Stack
          flex={1}
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 2, md: 3 }}
        >
          {img ? (
            <WrapperContent>
              <img
                src={urlFor(img)
                  .auto("format")
                  .width(imageWidth)
                  .height(imageHeight)
                  .fit("fill")
                  .url()
                  .toString()}
                alt={img.alt}
              />
            </WrapperContent>
          ) : (
            <WrapperContent>
              <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                playing={false}
                controls={true}
              />
            </WrapperContent>
          )}

          <Stack
            gap={2}
            sx={{
              maxWidth: { xs: "360px", md: "548px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="subhead">{title}</Typography>

              {description && (
                <Box sx={{ color: "gray" }}>
                  <PortableComponent data={description} />
                </Box>
              )}
            </Box>
            <Box>
              <Button
                component={RouterLink}
                to={slug}
                endIcon={
                  <SvgSpriteIcon
                    icon="arrow"
                    sx={{ transform: "rotate(270deg)" }}
                  />
                }
                variant="tertiary"
              >
                {t(`buttons.${Buttons.READ_MORE}`)}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </GrowView>
    </ListItem>
  );
};
export default NewsListItem;
