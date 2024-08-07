import { t } from "i18next";
import { Link as RouterLink } from "react-router-dom";
import { urlFor } from "@/config/sanity/imageUrl";
import {
  Box,
  Button,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import GrowView from "@/components/Common/GrowView";
import SvgSpriteIcon from "@/components/Common/SvgSpriteIcon";

import { IImage } from "@/types/commonTypes";
import { Buttons } from "@/types/translation.d";

import { getMasterClassPosterLink } from "@/utils/helpers";
import { WrapperContent } from "../styled";

interface IMasterClassListItem {
  img?: IImage;
  video?: string;
  title: string;
  description: string;
  slug: string;
}

const MasterClassListItem = ({
  img,
  video,
  title,
  description,
  slug,
}: IMasterClassListItem) => {
  const theme = useTheme();

  const posterLink = video ? getMasterClassPosterLink(video) : "";

  return (
    <ListItem>
      <GrowView>
        <Stack
          flex={1}
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: "16px", md: "24px" }}
        >
          {img ? (
            <WrapperContent>
              <img
                src={urlFor(img)
                  .auto("format")
                  .width(357)
                  .height(214)
                  .fit("fill")
                  .url()
                  .toString()}
                alt={img.alt}
              />
            </WrapperContent>
          ) : (
            <WrapperContent>
              <img src={posterLink} alt="video poster" />
            </WrapperContent>
          )}

          <Stack
            sx={{
              maxWidth: { xs: "360px", md: "548px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Typography variant="subhead">{title}</Typography>

              {description && (
                <Box sx={{ color: theme.palette.neutral[40] }}>
                  <Typography variant="bodyRegular">{description}</Typography>
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
export default MasterClassListItem;
