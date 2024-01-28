import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

import bannerWarState from "../../assets/images/bannerWarState.webp";
import PageTemplate from "../Common/PageTemplate";
import {
  BannerWrapper,
  MessageTypography,
  StyledBox,
  TitleTypography,
} from "./styled";

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
          <MessageTypography variant="h3" component={"p"}>
            {t(`warStatePlaceholder.message`)}
          </MessageTypography>
          <Button component={RouterLink} to={"/"} sx={{ width: "288px" }}>
            {t(`warStatePlaceholder.backToHomeBtn`)}
          </Button>
        </StyledBox>
      </BannerWrapper>
    </PageTemplate>
  );
};

export default WarStatePlaceholderPage;
