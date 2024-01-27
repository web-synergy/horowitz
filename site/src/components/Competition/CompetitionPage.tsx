// import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSettingsStore } from "@/store";
import PageTemplate from "../Common/PageTemplate";
import { Container } from "@mui/material";
import WarStatePlaceholderPage from "../WarStatePlaceholderPage/WarStatePlaceholderPage";
import { useState } from "react";

const CompetitionPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isWarTime, setIsWarTime] = useState(true);
  // const { pathname } = useLocation();

  const { competitions } = useSettingsStore();
  const {
    i18n: { language },
  } = useTranslation();

  const langCompetitions = competitions[language];
  const title = langCompetitions ? langCompetitions[0]?.title[0] : "";
  console.log(title);

  // const competitionName = pathname.slice(1);
  // const isCompetitionExist = langCompetitions?.find(
  //   (item) => item.slug === competitionName
  // );

  // if (!isCompetitionExist) {
  //   return <Navigate to={"404"} />;
  // }

  return isWarTime ? (
    <WarStatePlaceholderPage title={title} />
  ) : (
    <PageTemplate>
      <Container>
        <div>Competition Page</div>
      </Container>
    </PageTemplate>
  );
};

export default CompetitionPage;
