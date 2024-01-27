import { InDevelopment } from "@/types/translation.d";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import PageTemplate from "../Common/PageTemplate";
import { BannerWrapper, StyledBox, StyledTypography } from "./styled";
import bannerWarState from "../../assets/images/bannerWarState.webp";

interface WarStatePlaceholderPageProps {
  title: string;
}

const WarStatePlaceholderPage: FC<WarStatePlaceholderPageProps> = ({
  title,
}) => {
  const { t } = useTranslation();

  return (
    <PageTemplate mode="dark">
      <BannerWrapper img={bannerWarState}>
        <StyledBox>
          <Typography
            sx={{ color: "#D9A145" }}
            variant="title"
            component={"h1"}
          >
            {title}
          </Typography>
          <StyledTypography variant="subhead" component={"p"}>
            {t(`inDevelopment.${InDevelopment.MSG}`)}
          </StyledTypography>
          <Button component={RouterLink} to={"/"} sx={{ width: "288px" }}>
            {t(`inDevelopment.${InDevelopment.BTN}`)}
          </Button>
        </StyledBox>
      </BannerWrapper>
    </PageTemplate>
  );
};

export default WarStatePlaceholderPage;
