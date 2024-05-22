import { lazy } from "react";

const LazyMasterClassCurrentPage = lazy(
  () => import("./MasterClassCurrentPage")
);

export default LazyMasterClassCurrentPage;
