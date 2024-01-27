import { InDevelopment } from "@/types/translation.d";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import PageTemplate from "../Common/PageTemplate";
import {
  BannerWrapper,
  TitleTypography,
  MessageTypography,
  StyledBox,
} from "./styled";
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
          <TitleTypography variant="title" component={"h1"}>
            {title}
          </TitleTypography>
          <MessageTypography variant="subhead" component={"p"}>
            {t(`inDevelopment.${InDevelopment.MSG}`)}
          </MessageTypography>
          <Button component={RouterLink} to={"/"} sx={{ width: "288px" }}>
            {t(`inDevelopment.${InDevelopment.BTN}`)}
          </Button>
        </StyledBox>
      </BannerWrapper>
    </PageTemplate>
  );
};

export default WarStatePlaceholderPage;
