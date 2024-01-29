import { Stack, Pagination, PaginationItem } from '@mui/material';
import { FC } from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
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
    <Stack spacing={2}>
      <Pagination
        count={pageQty}
        variant='outlined'
        size='large'
        page={urlPage}
        onChange={(_, num) =>
          setSearchParams(prev => {
            prev.set('page', num.toString());
            return prev;
          })
        }
        sx={{ marginY: 4, marginX: 'auto' }}
        renderItem={item => (
          <PaginationItem
            component={RouterLink}
            to={`/news/?page=${item.page}`}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
export default PaginationNews;
