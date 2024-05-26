import { FC } from "react";
import { SetURLSearchParams } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";

interface IPagination {
  pageQty: number;
  urlPage: number;
  setSearchParams: SetURLSearchParams;
}

const PaginationMasterClass: FC<IPagination> = ({
  pageQty,
  urlPage,
  setSearchParams,
}) => {
  return (
    <Pagination
      count={pageQty}
      variant="outlined"
      size="large"
      page={urlPage}
      onChange={(_, num) =>
        setSearchParams((prev) => {
          prev.set("page", num.toString());
          return prev;
        })
      }
      sx={{
        "& .MuiPagination-ul": {
          justifyContent: "center",
        },
      }}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  );
};
export default PaginationMasterClass;
