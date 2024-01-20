import { Container, Box } from '@mui/material';

const MainPage = () => {
  return (
    <Container>
      <Box sx={{ height: 500, backgroundColor: 'green' }}>Section</Box>
      <Box sx={{ height: 500, backgroundColor: 'purple' }}>Section</Box>
      <Box sx={{ height: 500, backgroundColor: 'yellow' }}>Section</Box>
      <Box sx={{ height: 500, backgroundColor: 'brown' }}>Section</Box>
      <Box sx={{ height: 500, backgroundColor: 'blue' }}>Section</Box>
    </Container>
  );
};

export default MainPage;
