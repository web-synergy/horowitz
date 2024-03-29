import PageTemplate from "@/components/Common/PageTemplate";
import { Routes } from "@/types/routes.d";

const Professor = () => {
  return (
    <PageTemplate goBackUrl={Routes.SUMMER_SCHOOL_PROFESSORS}>
      <div>Professor Profile Summer School</div>
    </PageTemplate>
  );
};

export default Professor;
