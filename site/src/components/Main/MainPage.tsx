import { Container, IconButton } from '@mui/material';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';

const MainPage = () => {
  return (
    <Container>
      <p>MainPage</p>
      <IconButton sx={{ color: 'green', '&:hover': { color: 'red' } }}>
        <SvgSpriteIcon icon="arrow" size="large" />
      </IconButton>
    </Container>
  );
};

export default MainPage;
