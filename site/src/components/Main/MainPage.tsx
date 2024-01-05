import {
  Container,
  IconButton,
  Typography,
  Stack,
  Button,
  Link,
} from '@mui/material';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '../Common/Breadcrumbs';

const MainPage = () => {
  return (
    <Container>
      <Breadcrumbs title="Контакти" />
      <p>MainPage</p>
      <IconButton
        sx={{
          color: (theme) => theme.palette.primary.main,
          '&:hover': { color: (theme) => theme.palette.neutral[80] },
        }}
      >
        <SvgSpriteIcon icon="close" size="large" />
      </IconButton>
      <Stack>
        <Typography sx={{ color: (theme) => theme.palette.neutral[50] }}>
          Some Text
        </Typography>
      </Stack>
      <Stack gap={3} direction="row">
        <Button>Заявка на участь</Button>
        <Button variant="secondary" endIcon={<SvgSpriteIcon icon="phone" />}>
          Підтримати проєкт
        </Button>
      </Stack>
      <Link component={RouterLink} to="/about">
        Переглянути всі
        <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-90deg)' }} />
      </Link>
    </Container>
  );
};

export default MainPage;
