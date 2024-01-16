import PageTemplate from '../Common/PageTemplate';
import {
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NotFound } from '@/types/translation.d';
import { MainTitle, Wrapper } from './styled';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const { breakpoints } = useTheme();
  const isNotMobile = useMediaQuery(breakpoints.up('md'));

  console.log(isNotMobile);
  return (
    <PageTemplate>
      <Container
        sx={{
          paddingTop: { xs: '103px', md: '130px', lg: '159px' },
          paddingBottom: { xs: 8, md: 10, lg: '100px' },
          textAlign: 'center',
        }}
      >
        <Wrapper>
          <MainTitle>404</MainTitle>
        </Wrapper>
        <Typography
          component="h2"
          variant="h2"
          // variant={isNotMobile ? 'h2' : 'subhead'}
          mb={{ xs: '10px', md: 2, lg: '12px' }}
        >
          {t(`notFound.${NotFound.TITLE}`)}
        </Typography>
        <Typography
          component={'p'}
          variant="subhead"
          // variant={isNotMobile ? 'subhead' : 'bodyRegular'}
          mb={{ xs: 2, md: 5 }}
        >
          {t(`notFound.${NotFound.TEXT}`)}
        </Typography>
        <Button component={Link} to={'/'}>
          {t(`notFound.${NotFound.BTN}`)}
        </Button>
      </Container>
    </PageTemplate>
  );
};

export default NotFoundPage;
