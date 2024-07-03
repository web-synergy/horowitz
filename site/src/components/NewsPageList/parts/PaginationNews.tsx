import { Pagination, PaginationItem } from '@mui/material';
import { FC } from 'react';
import { SetURLSearchParams } from 'react-router-dom';
interface IPagination {
  pageQty: number;
  urlPage: number;
  setSearchParams: SetURLSearchParams;
}

const PaginationNews: FC<IPagination> = ({
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
        setSearchParams(
          (prev) => {
            prev.set('page', num.toString());
            return prev;
          },
          { replace: true }
        )
      }
      sx={{
        '& .MuiPagination-ul': {
          justifyContent: 'center',
        },
      }}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  );
};
export default PaginationNews;
