import { Container, Typography, Box } from '@mui/material';
import PageTemplate from '../Common/PageTemplate';

const SearchPage = () => {
  return (
    <>
      <Box sx={{ height: { xs: '36px', md: '68px' } }}></Box>
      <PageTemplate>
        <Container>
          <Typography>Пошук</Typography>
        </Container>
      </PageTemplate>
    </>
  );
};

export default SearchPage;
