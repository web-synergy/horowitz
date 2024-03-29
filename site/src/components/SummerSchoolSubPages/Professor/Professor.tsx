import { useLocation } from "react-router-dom";
import PageTemplate from "@/components/Common/PageTemplate";
import { Container, Typography } from "@mui/material";
import { useAnnualSummerSchoolStore } from "@/store/annualSummerSchoolStore";
import TextBlockComponent from "@/components/Templates/TextBlockComponent/TextBlockComponent";
import GoBackBtn from "@/components/Common/GoBackBtn";
import { Routes } from "@/types/routes.d";

const Professor = () => {
  const { pathname } = useLocation();
  const { professors, slug } = useAnnualSummerSchoolStore();

  if (!professors) {
    return null;
  }
  const profKey = pathname.split("/").slice(-1)[0];

  //add logic for finding current professor
  const professor = professors.find((prof) => prof._key === profKey);

  if (!professor) {
    return (
      <PageTemplate>
        <Container>
          <Typography variant="h3">professor didn't find</Typography>
        </Container>
      </PageTemplate>
    );
  }

  return (
    <>
      <PageTemplate>
        <Container>
          <Typography variant="h1" mb={1} sx={{ textTransform: "capitalize" }}>
            {professor.name}
          </Typography>
          <Typography
            variant="subhead"
            component={"p"}
            color={(theme) => theme.palette.neutral[60]}
            mb={{ xs: 3, md: 5, lg: 6 }}
          >
            {professor.instrument.toLowerCase()}
          </Typography>
          <TextBlockComponent
            textArray={professor.about}
            img={professor.avatar}
          />
        </Container>
      </PageTemplate>
      <GoBackBtn
        href={`${Routes.SUMMER_SCHOOL}/${slug}/${Routes.SUMMER_SCHOOL_PROFESSORS}`}
      />
    </>
  );
};

export default Professor;
